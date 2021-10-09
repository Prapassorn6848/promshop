import React, { Component } from 'react'
import history from '../history'
import './Modal.css';
import styled, { css } from 'styled-components'
import Button from 'react-bootstrap/Button';

import {FaUser, FaLock} from "react-icons/fa";




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
                            <a1 style={{color:"#FFB636",fontSize:"20px"}} type="text"> <FaUser />   Username or E-mail</a1>
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
                    <div style={{marginLeft:'60%'}} onClick={this.handleModalPasswrongOpen}>
                                <Button variant="link" onClick={() => history.push({pathname: '/forgotPass',})}>
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
            </div>
        
            
        )
    }
}


export default Login;