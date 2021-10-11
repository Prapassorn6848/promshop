import React, { Component } from 'react'

import history from '../history'
import './Modal.css';
import styled, { css } from 'styled-components'
import Button from 'react-bootstrap/Button';
import { FaUser, FaLock } from "react-icons/fa";
import './Style.css';
import { Success, Sendmail, Warning } from '../pic';
import { Send } from '@material-ui/icons';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import ReCAPTCHA from "react-google-recaptcha";
import firestore from '../firebase/firestore'
import { Alert } from 'bootstrap';
import { Base64 } from 'js-base64';


const TEST_SITE_KEY = "6Le9Zb8cAAAAAP1uib6Occmbc5Kc7xX1PFgzklYX";
const DELAY = 1500;

const ButtonTry = styled.button`
  background: #29292B;
  border: 2px;
  color: #ffffff;
  width: 121px;
  height: 48px;
  border-radius: 12px;
  margin: 0 1em;
  padding: 0.5em 1.75em;
`

const ButtonLogin = styled.button`
  background: #FFB636;
  border: 2px;
  color: #ffffff;
  width: 200px;
  height: 48px;
  border-radius: 30px;
  margin: 1 1em;
  padding: 0.5em 1.75em;
`

const ButtonCreateAc = styled.button`
  background: #FFB636;
  border: 2px;
  color: #ffffff;
  width: 330px;
  height: 48px;
  border-radius: 30px;
  margin: 1 1em;
  padding: 0.5em 1.75em;
`

class Login extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            modalPasswrong: false,
            modalSendsuccess: false,
            modalRegistersuccess: false,
            modalfill: false,
            callback: "not fired",
            value: "[empty]",
            load: false,
            expired: "false",
            user: null,
            pass: null,
            email: null,
            captcha: null,
            isVerified: false,
            canLogin:false,
        };
        this._reCaptchaRef = React.createRef();
    }


    onLogin = () => {
        if (this.state.email === null || this.state.email === "" || this.state.pass === null || this.state.pass === "") {
            console.log("Empty input!!")
            this.handleModalfillOpen()
        }

        else {
            firestore.getUser(this.state.email, this.getSuccess, this.getReject)
        }
    }



    getSuccess = (querySnapshot) => {
        let user;
        querySnapshot.forEach(doc => {
            user = doc.data()
            user.id = doc.id
            this.setState({ user: user })
        });
        /*console.log(user.pass)
        console.log(this.state.user.pass)*/
        if (Base64.decode(user.passwd) === this.state.pass) {
            if(this.state.isVerified){
                window.location.href="/homeAdmin"
            }
            else{
                alert("Please verify if you are human!!");
            }

            /*window.location.href="/home"*/
        } else {
            this.handleModalPasswrongOpen();
            // alert("Email or Password is incorrect")
        }
        /*console.log(this.state.account)*/
    }

    getReject = (error) => {
        console.log(error)
        this.handleModalPasswrongOpen()
        // alert("Email or Password is incorrect")
    }


    //////////////////////////////////////////////
    handleModalPasswrongClose = (e) => {
        this.setState({ modalPasswrong: false });
    };


    handleModalPasswrongOpen = () => {
        this.setState({ modalPasswrong: true });
    };
    //////////////////////////////////////////////
    handleModalPassresetClose = (e) => {
        this.setState({ modalPassreset: false });
    };


    ///////////////////////////////////////////////
    handleModalSendsuccessClose = (e) => {
        this.setState({ modalSendsuccess: false });
    };


    handleModalSendsuccessOpen = () => {
        this.setState({ modalSendsuccess: true });
    };
    ///////////////////////////////////////////////
    handleModalRegistersuccessClose = (e) => {
        this.setState({ modalRegistersuccess: false });
    };


    handleModalRegistersuccessOpen = () => {
        this.setState({ modalRegistersuccess: true });
    };
    ///////////////////////////////////////////////
    handleModalfillClose = (e) => {
        this.setState({ modalfill: false });
    };


    handleModalfillOpen = () => {
        this.setState({ modalfill: true });
    };
    ///////////////////////////////////////////////

    //Captcha
    
    //Capt2
    /*componentDidMount() {
        setTimeout(() => {
            this.setState({ load: true });
        }, DELAY);
        console.log("didMount - reCaptcha Ref-", this._reCaptchaRef);
    }
    handleChange = value => {
        console.log("Captcha value:", value);
        this.setState({ value });
        // if value is null recaptcha expired
        if (value === null) this.setState({ expired: "true" });
    };
    asyncScriptOnLoad = () => {
        this.setState({ callback: "called!" });
        console.log("scriptLoad - reCaptcha Ref-", this._reCaptchaRef);
    };*/
    /////////
    /*doSubmit = () => {
        let user_captcha = document.getElementById('user_captcha_input').value;

        if (validateCaptcha(user_captcha) == true) {
            alert('Captcha Matched');
            loadCaptchaEnginge(6);
            document.getElementById('user_captcha_input').value = "";
        }

        else {
            alert('Captcha Does Not Match');
            document.getElementById('user_captcha_input').value = "";
        }
    };*/
    //////////

    /*chaptcha*/

    onChange = (value) => {
        this.setState({ captcha: value })
        if (this.state.captcha) {
            this.setState({isVerified:true});
            console.log("Captcha value:", value);
        }
    }
    /*onCaptchaLoad = () => {
        console.log('Captcha loaded.')
    }
    verifyCaptcha = (res) => {
        if (res) {
            this.setState({ human: true, humanKey: res })
            this.setState({ disabled: this.isDisabled() })
        }
    }
    // ReCAPTCHA Expired
    expireCaptcha = () => {
        this.setState({ human: false, humanKey: null })
        this.setState({ disabled: this.isDisabled() })
    }*/

    render() {

        return (
            <div className="bgLogin">
            <div style={{ direction: 'row', width: "100%", height: "100vh"}}>
                <div style={{ marginLeft: "50%", direction: 'column', height: "100vh" }}>
                    <div style={{ textAlign: 'center', justifyContent: "center", alignItems: "center" }}>
                        <div style={{ height: "8vh" }}></div>
                        <a1 style={{ color: "#FFB636", fontSize: "50px" }}>PROMSHOP</a1>
                        <div style={{ height: "1.5vh" }}></div>
                        <a1 style={{ color: "#FFB636", fontSize: "20px" }}>Enter your username or email address and password</a1>
                        <div style={{ height: "0.1vh" }}></div>
                        <a1 style={{ color: "#FFB636", fontSize: "20px" }}>to get access account</a1>
                        <div style={{ height: "5vh" }}></div>
                    </div>
                    <div style={{ alignItems: "center" }}>
                        <div style={{ marginLeft: '17%' }}>
                            <a1 style={{ color: "#FFB636", fontSize: "20px" }} type="text"> <FaUser />  Username or E-mail</a1>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <input style={{ marginTop: '10px', width: 500, height: 40, color: "black" }} type="text" name="email"
                                onChange={txt => this.setState({ email: txt.target.value })} />
                        </div>

                        <div style={{ marginLeft: '17%', marginTop: '2%' }}>
                            <a1 style={{ color: "#FFB636", fontSize: "20px" }} type="text"><FaLock />   Password</a1>
                        </div>
                        <div style={{ textAlign: 'center' }} >
                            <input style={{ marginTop: '10px', width: 500, height: 40, color: "black" }} type="password" name="email"
                                onChange={txt => this.setState({ pass: txt.target.value })} />
                        </div>
                    </div>
                    <div style={{ marginLeft: '60%' }}>
                        <Button variant="link" onClick={() => {window.location.href="/forgotpass"}}>
                            Forgotten password ?
                        </Button>
                    </div>
                    <div style={{ marginLeft: '31%' }}>
                        <ReCAPTCHA
                            sitekey="6Le9Zb8cAAAAAP1uib6Occmbc5Kc7xX1PFgzklYX"
                            type={Image}
                            theme="dark"
                            onChange={this.onChange}
                        />
                    </div>
                    <div style={{ textAlign: 'center', paddingTop: "20px" }}>
                        <ButtonLogin style={{ fontSize: '28px', fontWeight: '600', color: '#29292B', paddingTop: "2px" }}
                            onClick={this.onLogin}>
                            Login
                        </ButtonLogin>
                    </div>
                    <div style={{ textAlign: 'center', paddingTop: "35px" }}>
                        <ButtonCreateAc style={{ fontSize: '24px', fontWeight: '600', color: "#29292B", paddingTop: "5px" }}
                            onClick={() => {window.location.href="/signup"}}>
                            Create New Account
                        </ButtonCreateAc>
                    </div>

                </div>

                <div hidden={!this.state.modalPasswrong}>
                    <div className="modal-backgroundPasswrong">
                        <div className="modal-cardPasswrong">
                            <div style={{ textAlign: 'center', justifyContent: "center", alignItems: "center" }}>
                                <div style={{ height: "2vh" }}></div>
                                <a1 style={{ color: "#29292B", fontSize: "32px", fontWeight: "600" }}>Login Failed</a1>
                                <div style={{ height: "2.5vh" }}></div>
                                <a1 style={{ color: "#29292B", fontSize: "24px" }}>Username or Password is incorrect.</a1>
                                <div style={{ height: "0.1vh" }}></div>
                                <a1 style={{ color: "#29292B", fontSize: "24px" }}>Please try again.</a1>
                                <div style={{ height: "5vh" }}></div>
                            </div>
                            <div style={{ textAlign: 'center', paddingTop: "5" }}>
                                <ButtonTry style={{ fontSize: 20 }} onClick={this.handleModalPasswrongClose}>OK</ButtonTry>
                            </div>
                        </div>
                    </div>
                </div>



                <div hidden={!this.state.modalSendsuccess}>
                    <div className="modal-backgroundSendSuccess" onClick={this.handleModalSendsuccessClose}>
                        <div className="modal-cardSendSuccess">
                            <div style={{ textAlign: 'center', justifyContent: "center", alignItems: "center" }}>
                                <div style={{ paddingTop: 30 }}>
                                    <img className="picSendmail" src={Sendmail} />
                                </div>
                                <div style={{ height: "1.5vh" }}></div>
                                <a1 style={{ color: "#29292B", fontSize: "30px", fontWeight: "bold" }}>Password Reset</a1>
                                <div style={{ height: "1vh" }}></div>
                                <a1 style={{ color: "#29292B", fontSize: "20px" }}>A message has been sent to you by email with instructions </a1>
                                <div style={{ height: "0.1vh" }}></div>
                                <a1 style={{ color: "#29292B", fontSize: "20px" }}>on how to reset your password.</a1>
                                <div style={{ height: "5vh" }}></div>
                            </div>
                            {/* <div style={{textAlign:'center', paddingTop: "5"}}>
                                <ButtonTry style={{ fontSize: 20 }} onClick={this.handleModalSendsuccessClose}>OK</ButtonTry>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div hidden={!this.state.modalRegistersuccess}>
                    <div className="modal-backgroundRegisSuccess">
                        <div className="modal-cardRegisSuccess">
                            <div style={{ textAlign: 'center', justifyContent: "center", alignItems: "center" }}>
                                <div style={{ paddingTop: 30 }}>
                                    <img className="picError" src={Success} />
                                </div>
                                <div style={{ height: "4vh" }}></div>
                                <a1 style={{ color: "#868181", fontSize: "30px", fontWeight: "bold" }}>Register Success</a1>
                                <div style={{ height: "1.8vh" }}></div>
                            </div>
                            {/* <div style={{textAlign:'center', paddingTop: "5"}}>
                                <ButtonTry style={{ fontSize: 20 }} onClick={this.handleModalRegistersuccessClose}>OK</ButtonTry>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div hidden={!this.state.modalfill}>
                    <div className="modal-backgroundfill" >
                        <div className="modal-cardfill">
                            <div style={{ textAlign: 'center', justifyContent: "center", alignItems: "center" }}>
                                <div style={{ paddingTop: 10 }}>
                                    <img className="picWarning" src={Warning} />
                                </div>
                                
                                <a1 style={{ color: "#29292B", fontSize: "24px",fontWeight: "600" }}>Please complete the information.</a1>
                                <div style={{ height: "1vh" }}></div>
                            </div>
                            <div style={{textAlign:'center', paddingTop: "10px"}}>
                                <ButtonTry style={{ fontSize: 20}} onClick={this.handleModalfillClose}>OK</ButtonTry>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
            </div>                        
        )
    }
}


export default Login;