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
            <div style={{width:"100%",height:"100vh",backgroundColor:"#29292B"}}>
                <div style={{Width:"50%",fontSize:'120px',color:"#FFB636",textAlign:'center',borderWidth:'bold'}} onClick={this.handleModalPasswrongOpen}>
                    Hello world
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