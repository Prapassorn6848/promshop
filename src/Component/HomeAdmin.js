import React, { Component } from 'react'
import history from '../history'
import firestore from "../firebase/firestore"
import { ButtonGroup } from 'react-bootstrap';
import styled, { css } from 'styled-components'

import {FiLogOut} from "react-icons/fi";
import {
    BrowserRouter as Router,
    Switch,
    NavLink,
    Route,
    Link
  } from "react-router-dom";
import './HomeS.css';

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

class HomeAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalChangePass: false,
        };
    }

    //////////////////////////////////////////////
    handleModalChangePassClose = (e) => {
        this.setState({ modalChangePass: false });
    };


    handleModalChangePassOpen = () => {
        this.setState({ modalChangePass: true });
    };
    //////////////////////////////////////////////
    


    render() {
        
        return (
            <div><h1 class="topja">PromSHOP</h1>
            <div class="testerja">
                 <h1 style={{fontSize:'30px'}}>Mariarty</h1>
                 <div style={{marginLeft:'10%',marginTop:'3%'}}>
                     <FiLogOut size={35} onClick={()=>window.location.href="/"} style={{cursor:'pointer'}}/>           
                </div>
            </div>    
                <h4 style={{fontSize:'16px',marginLeft:'93%',color:'white',marginTop:'-1.5%' }}>Admin</h4>
                <div class="text-box">
                <a href="#"  class="btn btn btn-white btn-animate " onClick={() => window.location.href="/view"}>Stock</a>
                </div>

                <div class="text-box1">
                <a href="/Edit" class="btn btn-white btn-animate " onClick={() => window.location.href="/edit"}>Edit</a>
                </div>

                <div class="text-box2">
                <a href="/History" class="btn btn-white btn-animate " onClick={() => window.location.href="/history"}>History</a>
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

                
            </div>
            
        )
    }
}


export default HomeAdmin;