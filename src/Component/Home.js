import React, { Component } from 'react'
import history from '../history'
import firestore from "../firebase/firestore"
import { ButtonGroup } from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Switch,
    NavLink,
    Route,
    Link
  } from "react-router-dom";
import './HomeS.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        
        return (
            <div><h1 class="top ">Promshop SHOP</h1>
                <h4 class="tester">Mariarty
                <a class="button" href="#">
                <img src="https://sv1.picz.in.th/images/2021/10/10/u4F2xu.png" alt="logout.png" /></a>
                
                </h4>
                
                <h4 class="tester2">Admin</h4>
                <div class="text-box">
                <a href="#"  class="btn btn btn-white btn-animate " >Stock</a>
                </div>

                <div class="text-box1">
                <a href="/Edit" class="btn btn-white btn-animate " >Edit</a>
                </div>

                <div class="text-box2">
                <a href="/History" class="btn btn-white btn-animate " >History</a>
                </div>
                
            </div>
            
        )
    }
}


export default Home;