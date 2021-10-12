import React, { Component } from 'react'
import history from '../history'
import firestore from "../firebase/firestore"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Link } from "@material-ui/core";

import { connect } from 'react-redux';
import { addUser , editUser} from '../actions/userAction';
import { addProduct , deleteProduct} from '../actions/productAction';

const columns = [

    
    { field: 'fullName',headerName: 'Full name',description: 'This column has a value getter and is not sortable.',sortable: false,width: 160,
      valueGetter: (params) =>
        `${params.getValue(params.id, 'firstName') || ''} ${
          params.getValue(params.id, 'lastName') || ''
        }`,width: 440,
    },
    { field: 'department',headerName: 'Department',width: 240,},
    { field: 'event',headerName: 'Event',width: 180,},
    { field: 'date',headerName: 'Date',width: 250,},
    { field: 'time',headerName: 'Time',width: 250,},
  ];

  


class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            historyList:[],
        };
    }

    componentDidMount() {
        firestore.getAllHistory(this.getAllHistorySuccess, this.getAllReject)
        
    }

    getAllHistorySuccess = (querySnapshot) => {
        querySnapshot.forEach(doc => {
            let history = doc.data()
            history.id = doc.id
            this.setState({historyList : this.state.historyList.concat(history)})
        });
        /*console.log(this.props.productList)*/
       
        
    }

    onBack =()=>{
        if(this.props.userList[this.props.userList.length - 1].department === 'Officer'){
            window.location.href="/homeUser"
        }else{
            window.location.href="/homeAdmin"
        }
    }

    getAllReject = (error) => {
        console.log(error)
    }

    render() {
        return (
            <div id="container">
                <div class = "view1">
                <div style={{ width: '100%' ,height:'5vh' , backgroundColor:'#29292B'}} ></div>
                <div class='view' >
                    <h1 style={{color:'#FFB636'}}> PROMSHOP</h1>
                    <h5 style={{color:'#FFB636'}}> History</h5> 
                </div>
                <div style={{ width: '100%' ,height:'50vh'}}>
                <DataGrid className='cssStyle'
                    rows={this.state.historyList}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[1]}
                />
                <div style={{display: 'flex', flexDirection: 'row',}}>
                    <Button  class="button1" style={{marginLeft:'1200px'}} onClick={this.onBack}>Back</Button>
                </div>
                </div>
                <div class='view' ></div>
                <div style={{ width: '100%' ,height:'5vh' , backgroundColor:'#FFB636'}} ></div>
                </div>
            </div>
        )
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (user) => dispatch(addUser(user)),
        addProduct: (product) => dispatch(addProduct(product)),
        editUser: (user) => dispatch(editUser(user)),
        deleteProduct:(product) => dispatch(deleteProduct(product))
    };
};

const mapStateToProps = (state) => {
    return {
        userList: state.userReducer.userList,
        productsList: state.productReducer.productsList,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
