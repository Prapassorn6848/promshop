import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './EditStyle.css';
import { DataGrid } from '@mui/x-data-grid';
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Button, Link } from "@material-ui/core";
import {FiLogOut} from "react-icons/fi";
import { connect } from 'react-redux';
import { addUser , editUser} from '../actions/userAction';
import { addProduct , deleteProduct} from '../actions/productAction';
/* 
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {}
  })
); */
const handleClick = (event, cellValues) => {
    console.log(cellValues.row);
    
  };
/* const handleCellClick = (param, event) => {
    event.stopPropagation();
};
const handleRowClick = (param, event) => {
    event.stopPropagation();
}; */
const columns = [
    {field: "name",headerName: "Name",width: 250},
    { field: "price",headerName: "Price", width: 250 },
    {field: "quantity",headerName: "quantity",width: 250},
    {
      field: "Delete",width:250,renderCell: (cellValues) => {
        return (
          <Button variant="contained" color="secondary" onClick={(event) => {handleClick(event, cellValues);}}>Delete</Button>
        );
      }
    },
 ];
 const rows  = [
    { id: 1,name: 'tV',price: '200',quantity: '2',},
    { id: 2,name: 'airpod',price: '5000',quantity: '10'},
    { id: 3,name: 'ipad',price: '12000',quantity: '5'},
    { id: 4,name: 'nokia',price: '1000',quantity: '30'},
    { id: 5,name: 'sumsung',price: '100000',quantity: '100'},
    { id: 6,name: 'computer',price: '25000',quantity: '9'},
];
class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div id="container">
                <div class = "view1">
                <div style={{ width: '100%' ,height:'5vh' , backgroundColor:'#29292B'}} ></div>
                <div class='view' >
                    <h1 style={{color:'#FFB636'}}> PROMSHOP</h1>
                    <h5 style={{color:'#FFB636'}}> Editor</h5> 
                    <h1 class="tester">Mariarty
                    <div style={{marginLeft:'85%',marginTop:'-14%'}}>
                     <FiLogOut size={40} onClick={()=>window.location.href="/"} style={{cursor:'pointer'}}/>           
                </div>

                </h1>
                <h4  class="tester2"> Admin</h4> 
                </div>
                <div  style={{ width: '100%' ,height:'50vh'}}>
                <DataGrid className='cssStyle'
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[1]}
                    
                />
                <Button  class="button1" onClick>Back</Button>
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
        products: state.productReducer.products,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
