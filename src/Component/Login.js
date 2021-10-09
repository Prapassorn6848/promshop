import React, { Component } from 'react'
import history from '../history'
import './Modal.css';
import styled, { css } from 'styled-components'
import Button from 'react-bootstrap/Button';

import {FaUser, FaLock} from "react-icons/fa";

import './Style.css';
import { Success, Sendmail } from '../pic';
import { Send } from '@material-ui/icons';


const ButtonTry = styled.button`
  background: #FFB636;
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
            modalChangePass: false,
            modalPassreset: false,
            modalSendsuccess: false,
            modalRegistersuccess: false,
        };
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

    //////////////////////////////////////////////
    handleModalChangePassClose = (e) => {
        this.setState({ modalChangePass: false });
    };


    handleModalChangePassOpen = () => {
        this.setState({ modalChangePass: true });
    };
    //////////////////////////////////////////////


    handleModalPassresetOpen = () => {
        this.setState({ modalPassreset: true });
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


    render() {
        return ( 
            <div style={{direction:'row',width:"100%",height:"100vh",backgroundColor:"#29292B"}}>
                <div style={{marginLeft:"50%",direction:'column',height:"100vh"}}>
                    <div style={{textAlign:'center',justifyContent:"center",alignItems:"center"}}>
                        <div style={{height:"10vh"}}></div>
                        <a1 style={{color:"#FFB636",fontSize:"50px"}}>PROMSHOP</a1>
                        <div style={{height:"1.5vh"}}></div>
                        <a1 style={{color:"#FFB636",fontSize:"20px"}}>Enter your username or email address and password</a1>
                        <div style={{height:"0.1vh"}}></div>
                        <a1 style={{color:"#FFB636",fontSize:"20px"}}>to get access account</a1>
                        <div style={{height:"5vh"}}></div>
                    </div>
                    <div style={{alignItems:"center"}}>
                        <div style={{marginLeft:'17%'}}>
                            <a1 style={{color:"#FFB636",fontSize:"20px"}} type="text"> <FaUser />  Username or E-mail</a1>
                        </div>
                        <div style={{textAlign:'center'}}>
                            <input style={{ marginTop:'10px',width: 500,height:40,color:"black"}} type="text" name="email"/>
                        </div>
                        <div style={{marginLeft:'17%',marginTop:'2%'}}>
                            <a1 style={{color:"#FFB636",fontSize:"20px"}} type="text"><FaLock />   Password</a1>
                        </div>
                        <div style={{textAlign:'center'}} >
                            <input style={{ marginTop:'10px',width: 500,height:40,color:"black"}} type="password" name="email"/>
                        </div>
                    </div>
                    <div style={{marginLeft:'60%'}}>
                                <Button variant="link" onClick={this.handleModalPassresetOpen}>
                                    Forgotten password ?
                                </Button>
                    </div>
                    <div style={{textAlign:'center', paddingTop: "20px"}}>
                        <ButtonLogin style={{fontSize:'28px',fontWeight:'bold',color:'#29292B',paddingTop: "2px"}}>
                            Login
                        </ButtonLogin>
                    </div>
                    <div style={{textAlign:'center', paddingTop: "35px"}}>
                        <ButtonCreateAc style={{fontSize:'24px',fontWeight:'bold',color:"#29292B",paddingTop: "5px"}}>
                            Create New Account
                        </ButtonCreateAc>
                    </div>
                </div>

                <div hidden={!this.state.modalPasswrong}>
                    <div className="modal-backgroundPasswrong">
                        <div className="modal-cardPasswrong">
                            <div  style={{textAlign:'center',justifyContent:"center",alignItems:"center"}}>
                                <div style={{height:"2vh"}}></div>
                                <a1 style={{color:"#29292B",fontSize:"32px", fontWeight: "bold"}}>Login Failed</a1>
                                <div style={{height:"1.8vh"}}></div>
                                <a1 style={{color:"#29292B",fontSize:"24px"}}>Username or password is incorrect.</a1>
                                <div style={{height:"0.1vh"}}></div>
                                <a1 style={{color:"#29292B",fontSize:"24px"}}>Please try again.</a1>
                                <div style={{height:"5vh"}}></div>
                            </div>
                            <div style={{textAlign:'center', paddingTop: "5"}}>
                                <ButtonTry style={{ fontSize: 20 }} onClick={this.handleModalPasswrongClose}>OK</ButtonTry>
                            </div>
                        </div>
                    </div>
                </div>

                <div hidden={!this.state.modalChangePass}>
                    <div className="modal-backgroundChangePass">
                        <div className="modal-cardChangePass">
                            <div  style={{textAlign:'center',justifyContent:"center",alignItems:"center"}}>
                                <div style={{height:"5vh"}}></div>
                                <a1 style={{color:"#29292B",fontSize:"32px", fontWeight: "bold"}}>CHANGE PASSWORD</a1>
                                <div style={{height:"0.1vh"}}></div>
                                <a1 style={{color:"#29292B",fontSize:"16px"}}>90 days have passed since Your last password change.</a1>
                                <div style={{height:"0.1vh"}}></div>
                                <a1 style={{color:"#29292B",fontSize:"16px"}}>Insert a new password and retype it in blow form.</a1>
                                
                                <div style={{textAlign:'start',marginLeft:"14%",marginTop:'20px'}}>
                                    <a1 style={{color:"",fontSize:"20px"}} type="text">Old Password</a1>
                                </div>
                                <div style={{textAlign:'center'}}>
                                    <input style={{ width: 400,height:40,color:"black"}} type="text" name="OldPass"/>
                                </div>
                                <div style={{textAlign:'start',marginLeft:"14%",marginTop:'10px'}}>
                                    <a1 style={{color:"",fontSize:"20px"}} type="text">New Password</a1>
                                </div>
                                <div style={{textAlign:'center'}}>
                                    <input style={{ width: 400,height:40,color:"black"}} type="text" name="NewPass"/>
                                </div>
                                <div style={{textAlign:'start',marginLeft:"14%",marginTop:'10px'}}>
                                    <a1 style={{color:"",fontSize:"20px"}} type="text">Confirm New Password</a1>
                                </div>
                                <div style={{textAlign:'center'}}>
                                    <input style={{ width: 400,height:40,color:"black"}} type="text" name="ConfirmNewPass"/>
                                </div>
                                <div style={{height:"6vh"}}></div>
                            </div>
                            <div style={{textAlign:'end', paddingTop: "5"}}>
                                <ButtonTry style={{ fontSize: 20 }} onClick={this.handleModalChangePassClose}>OK</ButtonTry>
                            </div>
                        </div>
                    </div>
                </div>

                <div hidden={!this.state.modalPassreset}>
                    <div className="modal-backgroundPassreset">
                        <div className="modal-cardPassreset">
                            <div style={{textAlign:'center',justifyContent:"center",alignItems:"center"}}>
                                <div style={{height:"8vh"}}></div>
                                <a1 style={{color:"#29292B",fontSize:"40px", fontWeight: "bold"}}>Password Reset</a1>
                                <div style={{height:"1.8vh"}}></div>
                                <a1 style={{color:"#29292B",fontSize:"24px"}}>Enter your username or email address that you used to register. </a1>
                                <div style={{height:"0.1vh"}}></div>
                                <a1 style={{color:"#29292B",fontSize:"24px"}}>We'll send you an email with your username and a link to reset your password.</a1>
                                <div style={{height:"5vh"}}></div>
                            </div>
                                <a1 style={{color:"#737373",fontSize:"20px", paddingLeft: "100px"}}>Email address or username</a1>
                                <div style={{textAlign:'center'}}>
                                    <input style={{ marginTop:'5px',width: 750, height:40, color:"black"}} type="text" name="email"/>
                                </div>
                                <div style={{textAlign:'center', paddingTop: "70px"}}>
                                    <ButtonTry style={{ fontSize: 20 }} onClick={this.handleModalSendsuccessOpen}>SEND</ButtonTry>
                                </div>     
                        </div>
                    </div>
                </div>

                <div hidden={!this.state.modalSendsuccess}>
                    <div className="modal-backgroundSendSuccess" onClick = {this.handleModalSendsuccessClose}>
                        <div className="modal-cardSendSuccess">
                            <div  style={{textAlign:'center',justifyContent:"center",alignItems:"center"}}>
                                <div style={{ paddingTop: 30 }}>
                                    <img className="picSendmail" src={Sendmail} />
                                </div>
                                <div style={{height:"1.5vh"}}></div>
                                <a1 style={{color:"#29292B",fontSize:"30px", fontWeight: "bold"}}>Password Reset</a1>
                                <div style={{height:"1vh"}}></div>
                                <a1 style={{color:"#29292B",fontSize:"20px"}}>A message has been sent to you by email with instructions </a1>
                                <div style={{height:"0.1vh"}}></div>
                                <a1 style={{color:"#29292B",fontSize:"20px"}}>on how to reset your password.</a1>
                                <div style={{height:"5vh"}}></div>
                            </div>
                            {/* <div style={{textAlign:'center', paddingTop: "5"}}>
                                <ButtonTry style={{ fontSize: 20 }} onClick={this.handleModalSendsuccessClose}>OK</ButtonTry>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div hidden={!this.state.modalRegistersuccess}>
                    <div className="modal-backgroundRegisSuccess" onClick = {this.handleModalRegistersuccessClose}>
                        <div className="modal-cardRegisSuccess">
                            <div  style={{textAlign:'center',justifyContent:"center",alignItems:"center"}}>
                                <div style={{ paddingTop: 30 }}>
                                    <img className="picError" src={Success} />
                                </div>
                                <div style={{height:"4vh"}}></div>
                                <a1 style={{color:"#29292B",fontSize:"30px", fontWeight: "bold"}}>Register Success</a1>
                                <div style={{height:"1.8vh"}}></div>                                
                            </div>
                            {/* <div style={{textAlign:'center', paddingTop: "5"}}>
                                <ButtonTry style={{ fontSize: 20 }} onClick={this.handleModalRegistersuccessClose}>OK</ButtonTry>
                            </div> */}
                        </div>
                    </div>
                </div>

            </div>
        
        )
    }
}


export default Login;