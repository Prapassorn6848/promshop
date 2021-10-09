import React, { Component } from 'react'
import history from '../history'
import firestore from "../firebase/firestore"
import './Style.css';
import {Box,TextField,Button} from "@material-ui/core";




class ForgotPass extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
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
                        <button class="button" ><span>SEND</span></button>
                </div > 
          </div>
        )
    }
}


export default ForgotPass;