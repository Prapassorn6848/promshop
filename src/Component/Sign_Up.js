import React, { Component } from 'react'
import './SignStyle.css'
import history from '../history'
import firestore from '../firebase/firestore'
import { Base64 } from 'js-base64';


const options = [
    {
      label: "Officer",
      value: "officer",
    },
    {
      label: "Manager",
      value: "manager",
    },
    {
      label: "Admin",
      value: "admin",
    },
];

class Sign_Up extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname:'',
            lastname:'',
            username:'',
            email:'',
            passwd:'',
            department:'',
            canAdd: true,

        };
    }

    onAdd = () => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if ((this.state.firstname !== '') && (this.state.lastname !== '') && (this.state.username !== '') && (this.state.email !== '') && (this.state.passwd !== '') && (this.state.department !== '') ) {
            
            firestore.getUser(this.state.email, this.getSuccess, this.getReject)
            
            if(re.test(this.state.email)===false){
                alert("Invalid Email")
            }
            if (this.state.canAdd === false) {
                alert('Email is already have.')
            } else {
                //firebase
                const user = {
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    username: this.state.username,
                    email: this.state.email,
                    department: this.state.department,
                    passwd: Base64.encode(this.state.passwd),
                }
                firestore.addUser(user, this.addSuccess, this.addReject)
            }

        }else {
            alert('Please complete all infomations.')
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
        this.setState({canAdd : false})
        /*console.log(this.state.account)*/
    }

    getReject = (error) => {
        console.log(error)
        this.setState({canAdd : true})
        // alert("Email or Password is incorrect")
    }

    addSuccess = (doc) => {
        console.log(doc.id)
        history.push('/')
    }

    addReject = (error) => {
        console.log(error)
    }



    

    render() {
        return (
            <div style={{direction:'row',width:"100%",height:"100vh",backgroundColor:"#29292B"}}>
                <div style={{textAlign:'center',justifyContent:"center",alignItems:"center"}}>
                    <div style={{height:"5vh"}}></div>
                    <h2 style={{color:"#FFB636",fontSize:"40px"}}>Sign up</h2>
                    <div style={{height:"0.5vh"}}></div>
                    <a1 style={{color:"#FFB636",fontSize:"15px"}}>Please fill this form to create an account!</a1>
                </div>
                <div style={{alignItems:"center",paddin:'10px'}}>
                    <div style={{marginLeft:'35%'}}>
                        <div>
                            <a1 style={{color:"#FFB636",fontSize:"16px"}} type="text">First Name</a1>
                            <a1 style={{color:"#FFB636",fontSize:"16px",marginLeft:'18%'}} type="text">Last Name</a1>
                        </div>
                    </div> 
                    <div style={{direction:'row'}}>
                        <div style={{textAlig:'left',marginLeft:'35%'}}>
                            <input style={{ marginTop:'10px',width:200,height:30,color:"black"}} type="text" name="first-name"
                            onChange={txt => this.setState({ firstname: txt.target.value })}/>
                            <input style={{ marginTop:'10px',width:200,height:30,color:"black",marginLeft:'5%'}} type="text" name="last-name"
                            onChange={txt => this.setState({ lastname: txt.target.value })}/>
                        </div>                   
                    </div>
               </div>
                <div style={{alignItems:"center"}}>
                    <div style={{marginLeft:'35%', direction:'colunm',paddingTop:'0.5%'}}>
                        <div>
                            <a1 style={{color:"#FFB636",fontSize:"16px"}} type="text">Username</a1>
                            <a1 style={{color:"#FFB636",fontSize:"16px",marginLeft:'18.5%'}} type="text">Email</a1>
                        </div>
                    </div> 
                    <div style={{textAlign:'left', marginLeft:'35%', direction:'row'}}>
                        <input style={{ marginTop:'10px',width:200,height:30,color:"black"}} type="text" name="username"
                        onChange={txt => this.setState({ username: txt.target.value })}/>
                        <input style={{ marginTop:'10px',width:200,height:30,color:"black",marginLeft:'5%'}} type="text" name="email"
                        onChange={txt => this.setState({ email: txt.target.value })}/>
                    </div>
                </div>
                <div style={{alignItems:"center"}}>
                    <div style={{marginLeft:'35%',paddingTop:'0.5%'}}>
                        <div>
                            <a1 style={{color:"#FFB636",fontSize:"16px"}} type="text">Password</a1>
                        </div>
                    </div> 
                    <div style={{textAlign:'left', marginLeft:'35%'}}>
                        <input style={{ marginTop:'10px',width:460,height:30,color:"black"}} type="text" name="password"
                        onChange={txt => this.setState({ passwd: txt.target.value })}/>
                    </div>
                </div>
                <div style={{alignItems:"center"}}>
                    <div style={{marginLeft:'35%',paddingTop:'0.5%'}}>
                        <div>
                            <a1 style={{color:"#FFB636",fontSize:"16px"}} type="text">Confirm Password</a1>
                        </div>
                    </div> 
                    <div style={{textAlign:'left', marginLeft:'35%',}}>
                        <input style={{ marginTop:'10px',width:460,height:30,color:"black"}} type="text" name="password"/>
                    </div>
                </div>
                <div style={{alignItems:"center"}}>
                    <div style={{marginLeft:'35%',paddingTop:'0.5%'}}>
                        <a1 style={{color:"#FFB636",fontSize:"16px"}} type="text">Department</a1>
                    </div> 
                    <div style={{marginLeft:'35%',paddingTop:'0.5%'}}>
                        <input type="radio" value="Officer" name="department" 
                        onChange={txt => this.setState({ department: 'Officer' })}/><label style={{paddingLeft:'1%', paddingRight:'2%',color:'#FFB636'}}>Officer</label>
                        <input type="radio" value="Manager" name="department" 
                        onChange={txt => this.setState({ department: 'Manager' })}/><label style={{paddingLeft:'1%', paddingRight:'2%',color:'#FFB636'}}> Manager</label>
                        <input type="radio" value="Admin" name="department" 
                        onChange={txt => this.setState({ department: 'Admin' })}/><label style={{paddingLeft:'1%', paddingRight:'2%',color:'#FFB636'}}>Admin</label>
                    </div> 
                </div>
                <div style={{marginLeft:'45%',paddingTop:'1%'}}>
                    <button style={{ width: 200,height:50,borderRadius:'40px',fontSize:'20px',fontWeight:'bold',fontFamily:"initial",color:'#000000',cursor: 'pointer',backgroundColor:'#FFB636'}}
                    onClick={this.onAdd}>
                        Sign up
                    </button>
                </div>
                <div style={{marginLeft:'48%',paddingTop:'1%'}}>
                    <button style={{ width: 100,height:40,borderRadius:'10px',fontSize:'16px',fontFamily:"initial",color:'#ffffff',cursor: 'pointer',backgroundColor:'#29292B'}}
                    onClick={() =>  {window.location.href="/"}}>
                        Back
                    </button>
                </div>
            </div>
        )
    }
}


export default Sign_Up;