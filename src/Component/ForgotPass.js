import React, { Component } from 'react'
import history from '../history'
import firestore from "../firebase/firestore"
import './Style.css';
import {Box,TextField,Button} from "@material-ui/core";
import styled, { css } from 'styled-components'
import './Modal.css';

import PinInput from "react-pin-input";
import Countdown from 'react-countdown';
import { AiOutlineReload } from "react-icons/ai";

const ButtonOK = styled.button`
  background: #29292B;
  border: 2px;
  color: #ffffff;
  width: 121px;
  height: 48px;
  border-radius: 12px;
  margin: 0 1em;
  padding: 0.5em 1.75em;
`
const ButtonResend = styled.button`
  background: #868181;
  border-radius: 10px;
  border: 2px;
  color: #ffffff;
  margin: 0 1em;
  padding: 0.5em 1em;
  `

  const FontTopic = styled.div`
  && {
    color: #000000;
    font-size: 30px;
  }
`



class ForgotPass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal3: false,
            Pin: null,
            pinVar: null,
            pinMSG: "",
        };
    }

    ///////////////////////////////////////////////////////
  handleModal3Close = (e) => {
    this.setState({ modal3: false });
  };


  handleModal3Open = () => {
    this.setState({ modal3: true });
  };
  ///////////////////////////////////////////////////////

  
        onSend = (e) => {
            e.preventDefault()
            this.setState({ Pin: Math.floor(100000 + Math.random() * 900000).toString() })
            firestore.getUser(this.state.email, this.success, this.reject)
          }
          onCheckP = () => {

            if (this.state.Pin === this.state.pinVar) {
              console.log("Correct!!")
              this.handleModal3Close()
              this.setState({
                pinMSG: ""
              });
            }
            else {
              this.setState({
                pinMSG: "Incorrect PIN"
              });
              console.log("incorrect")
            }
          }
    
    render() {
        const Completionist = () => {
            this.setState({
              Pin: "Invalid"
            })
            return <p>Timeout</p>;
          }
        return (
            <div id='container-forgotpass'>
                <div class='forgot' >
                    <h1 class= 'text'>Password Reset</h1>
                    <a1 class= 'text1'>Enter your username, or the email address that you used to register.</a1>
                    <div></div>
                    <a1 class= 'text1'>We'll send you an email with your username and a link to reset your password.</a1>
                    <div style={{width:'100%',height:'1vh' ,backgroundColor:'#29292B'}}></div>                    
                        <input class ='input'></input>   
                        <div style={{width:'100%',height:'2vh' ,backgroundColor:'#29292B'}}></div>
                        <button class="buttonfern" onClick={this.handleModal3Open}><span>SEND</span></button>
                </div > 

        <div hidden={!this.state.modal3}>
          <div className="modal-background">
            <div className="modal-cardforget" >
              <div>
                <FontTopic style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 20 }} >
                  Enter Your PIN
                </FontTopic>
              </div>
              <div style={{ paddingLeft: 100, color: "red" }}>{this.state.pinMSG}</div>
              <div style = {{display: 'flex', flexDirection: 'row',justifyContent:'center',alignItems:'center' ,marginRight:'20px'}}>
                <PinInput
                  length={6}
                  initialValue=""
                  secret
                  type="numeric"
                  inputMode="number"
                  style={{ padding: '10px' }}
                  inputStyle={{ borderColor: '#29292B' }}
                  inputFocusStyle={{ borderColor: 'red' }}
                  autoSelect={true}
                  regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                  onChange={value => this.setState({ pinVar: value })}
                  style={{ paddingLeft: 100, paddingTop: 40 }}
                />
                <div style = {{paddingTop: 45}}>
                  <ButtonResend onClick={this.onResend}><AiOutlineReload size = {20}/> </ButtonResend>
                </div>
              </div>
              <div style={{ paddingTop: 15, paddingLeft: 8 }}>
                <Countdown date={Date.now() + 10000 * 6 * 3}>
                  <Completionist />
                </Countdown>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ paddingTop: 45 }}>
                  <ButtonOK style={{ fontSize: 17 }} onClick={this.onCheckP}>Submit</ButtonOK>
                </div>
              </div>
            </div>
          </div>
        </div>
            </div>

            
          
        )

    }
}


export default ForgotPass;