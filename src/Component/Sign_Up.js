import React, { Component } from 'react'
import './SignStyle.css'
import history from '../history'


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
            gender: '',
            position:'',

        };
    }

    _onChange(value) {
        //console.log(value) - just to see what we recive from <Select />
        this.setState({position: value});
      }
    

    render() {
        return (
            <div style={{direction:'row',width:"100%",height:"100vh",backgroundColor:"#29292B"}}>
                <div style={{textAlign:'center',justifyContent:"center",alignItems:"center"}}>
                    <div style={{height:"5vh"}}></div>
                    <h2 style={{color:"#FFB636",fontSize:"40px"}}>Sign up</h2>
                    <div style={{height:"0.5vh"}}></div>
                    <a1 style={{color:"#FFB636",fontSize:"15px"}}>Please fill this form to create an account!</a1>
                </div>\
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
                        <a1 style={{color:"#FFB636",fontSize:"16px"}} type="text">Gender</a1>
                    </div> 
                    <div style={{marginLeft:'35%',paddingTop:'0.5%'}}>
                        <input type="radio" value="Male" name="gender" 
                        onChange={txt => this.setState({ gender: 'Male' })}/><label style={{paddingLeft:'1%', paddingRight:'2%',color:'#FFB636'}}>Male</label>
                        <input type="radio" value="Female" name="gender" 
                        onChange={txt => this.setState({ gender: 'Female' })}/><label style={{paddingLeft:'1%', paddingRight:'2%',color:'#FFB636'}}> Female</label>
                        <input type="radio" value="Other" name="gender" 
                        onChange={txt => this.setState({ gender: 'Other' })}/><label style={{paddingLeft:'1%', paddingRight:'2%',color:'#FFB636'}}>Prefer not to say</label>
                    </div> 
                </div>
                <div className="Position">
                    <div style={{marginLeft:'35%',paddingTop:'0.5%'}}>
                        <div>
                            <a1 style={{color:"#FFB636",fontSize:"16px"}} type="text">Position</a1>
                        </div>
                    </div> 
                    <div style={{textAlign:'left', marginLeft:'35%',paddingTop:'0.5%'}}>
                        <div id="App">
                            <div className="select-container">
                                <select >
                                    {options.map((option) => (
                                    <option value={option.value}
                                    onChange={this._onChange.bind(this)}
                                    >{option.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{marginLeft:'45%',paddingTop:'1%'}}>
                    <button style={{ width: 200,height:50,borderRadius:'40px',fontSize:'20px',fontWeight:'bold',fontFamily:"initial",color:'#000000',cursor: 'pointer',backgroundColor:'#FFB636'}}
                    onClick={() => console.log(this.state.position)}>
                        Sign up
                    </button>
                </div>
                <div style={{marginLeft:'48%',paddingTop:'1%'}}>
                    <button style={{ width: 100,height:40,borderRadius:'10px',fontSize:'16px',fontFamily:"initial",color:'#ffffff',cursor: 'pointer',backgroundColor:'#29292B'}}
                    onClick={() => history.push({pathname: '/',})}>
                        Back
                    </button>
                </div>
            </div>
        )
    }
}


export default Sign_Up;