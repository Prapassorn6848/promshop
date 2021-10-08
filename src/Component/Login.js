import React, { Component } from 'react'

import styled, { css } from 'styled-components'
import './Modal.css';

const FontHead = styled.div`
  && {
    color: #000000;
    font-size: 32px;
    font-weight: bold;
  }
`
const Fontdesc = styled.div`
  && {
    color: #000000;
    font-size: 24px;
  }
`
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
                            <a1 style={{color:"#FFB636",fontSize:"20px"}} type="text">Username or E-mail</a1>
                        </div>
                        <div style={{textAlign:'center'}}>
                            <input style={{ marginTop:'10px',width: 500,height:40,color:"black"}} type="text" name="email"/>
                        </div>
                        <div style={{marginLeft:'17%',marginTop:'2%'}}>
                            <a1 style={{color:"#FFB636",fontSize:"20px"}} type="text">Password</a1>
                        </div>
                        <div style={{textAlign:'center'}} >
                            <input style={{ marginTop:'10px',width: 500,height:40,color:"black"}} type="text" name="email"/>
                        </div>
                    </div>
                    <div style={{marginLeft:'60%'}}>
                        <a1 style={{color:"#FF0000",fontSize:"20px"}}>forgotten password ?</a1>
                    </div>
                    <div style={{textAlign:'center',marginTop:'10%'}}>
                        <button style={{ width: 200,height:50,borderRadius:'40px',fontSize:'30px',fontWeight:'bold',fontFamily:"initial",color:'#FFB636',cursor: 'pointer'}}>
                            Login
                        </button>
                    </div>
                    <div style={{textAlign:'center',marginTop:'3%'}}>
                        <button style={{ width: 300,height:50,borderRadius:'40px',fontSize:'30px',fontWeight:'bold',fontFamily:"initial",color:"#FFB636",cursor: 'pointer'}}>
                            Create New Account
                        </button>
                    </div>
                </div>

                <div hidden={!this.state.modalPasswrong}>
                    <div className="modal-backgroundPasswrong">
                        <div className="modal-cardPasswrong">
                            <div>
                                <FontHead style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} >
                                    <p>Login Failed</p>
                                </FontHead>
                            </div>
                            <div>
                                <Fontdesc style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} >
                                    <p>Your Email or password is incorrect.</p>
                                    <p>Please try again.</p>
                                </Fontdesc>
                            </div>
                            <div style={{ paddingLeft: 270, paddingTop: 10 }}>
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