import React, { Component } from 'react'
import firebase from 'firebase';
import firestore from "../firebase/firestore"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';
import { DataGrid } from '@mui/x-data-grid';

import { FiLogOut } from "react-icons/fi";

import { connect } from 'react-redux';
import { addUser, editUser } from '../actions/userAction';
import { addProduct, deleteProduct } from '../actions/productAction';
import Button from '@restart/ui/esm/Button';
//const db = firebase.firestore();
console.log("fern");

const columns = [
  { field: 'productID', headerName: 'ID', width: 200 },
  { field: 'name', headerName: 'Name', width: 750 },
  { field: 'price', headerName: 'Price', type: 'number', width: 205 },
  { field: 'QTY', headerName: 'QTY', type: 'number', width: 205 },

];



class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
    };

    //db.collection('User').get().then((snapshot)=>  {
    //    snapshot.forEach(doc=> {
    //       console.log(doc.data()); 
    //   });     
    //});

  }

  componentDidMount() {
    firestore.getAllProduct(this.getAllProductSuccess, this.getAllReject)

  }

  getAllProductSuccess = (querySnapshot) => {
    querySnapshot.forEach(doc => {
      let product = doc.data()
      product.id = doc.id
      this.setState({ productList: this.state.productList.concat(product) })
      console.log(this.state.productList)
      console.log(product)
    });
    /*console.log(this.props.productList)*/


  }

  getAllReject = (error) => {
    console.log(error)
  }

  onBack = () => {
    if (this.props.userList[this.props.userList.length - 1].department === 'Officer') {
      window.location.href = "/homeUser"
    } else {
      window.location.href = "/homeAdmin"
    }
  }

  render() {
    return (

      <div id="container">
        <div class="view1">
          <div style={{ width: '100%', height: '5vh', backgroundColor: '#29292B' }} ></div>
          <div class='view' >
            <h1 style={{ color: '#FFB636' }}>View stock</h1>
          </div>
          <div style={{ width: '100%', height: '50vh' }}>
            <DataGrid className='cssStyle'
              rows={this.state.productList}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[1]}
            />
            <div style={{ display: 'flex', flexDirection: 'row', }}>
              <Button class="button1" style={{ marginLeft: '1200px' }} onClick={this.onBack}>Back</Button>
            </div>
          </div>
          <div class='view' ></div>
          <div style={{ width: '100%', height: '10vh', backgroundColor: '#FFB636' }} >
          </div>
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
    deleteProduct: (product) => dispatch(deleteProduct(product))
  };
};

const mapStateToProps = (state) => {
  return {
    userList: state.userReducer.userList,
    products: state.productReducer.products,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
