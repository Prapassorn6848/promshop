import React, { Component } from 'react'
import firebase from 'firebase';
import firestore from "../firebase/firestore"
import 'bootstrap/dist/css/bootstrap.min.css';


//const db = firebase.firestore();
console.log("fern");



class View extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

        //db.collection('User').get().then((snapshot)=>  {
        //    snapshot.forEach(doc=> {
         //       console.log(doc.data()); 
         //   });     
        //});
        
    }

    render() {
        return (
            <div style={bg}>
            <h1 style={cssStyle}> Promshop </h1>
            <table  class="table table table-hover table-dark "style={tb}>
              <thead class="bg-warning">
                <tr style={cssStyle}>
                  <th>ชื่อ</th>
                  <th>นามสกุล</th>
                  <th>อีเมล</th>
                </tr>
              </thead>
              <tbody>
                <tr style={cssStyle}>
                  <td>นิสากร</td>
                  <td>โครตสวย</td>
                  <td>สวยเกิ๊น</td>
                </tr>
                <tr style={cssStyle}>
                  <td>นังมิว</td>
                  <td>ไม่สวย</td>
                  <td>เบอรรี่</td>
                </tr>
                <tr style={cssStyle}>
                  <td>นังพิง</td>
                  <td>นังงูพิก</td>
                  <td>เดี๋ยวโดนฉก</td>
                </tr>
              </tbody>
            </table>
            
            </div>
 
        )
    }
    
}
const cssStyle = {
    color: '#FFB636', 
    textAlign: 'center'
}
const bg = {
    backgroundColor: '#29292B', 
    widht : '100%',
    height:'100vh',
}
const tb = {
    justifyContent : "center",
    margin: '5%',
    width : "70%",
    height:'30vh',
    
}




export default View;