import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './EditStyle.css';
import { DataGrid } from '@mui/x-data-grid';
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Button, Link } from "@material-ui/core";
import { FiLogOut } from "react-icons/fi";
import { connect } from 'react-redux';
import { addUser, editUser } from '../actions/userAction';
import { addProduct, deleteProduct } from '../actions/productAction';
import firestore from "../firebase/firestore"
import moment from 'moment'
/* 
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {}
  })
); */
 
/* const handleCellClick = (param, event) => {
    event.stopPropagation();
};
const handleRowClick = (param, event) => {
    event.stopPropagation();
}; */

var productID = "";

const handleClick = (event, cellValues) => {
    console.log(cellValues.row.id);
    productID = cellValues.row.id;

};

const columns = [
    { field: 'productID', headerName: 'ID', width: 200 },
    { field: 'name', headerName: 'Name', width: 250 },
    { field: 'price', headerName: 'Price', type: 'number', width: 250 },
    { field: 'QTY', headerName: 'QTY', type: 'number', width: 250 },
    {
        field: "Delete", width: 250, renderCell: (cellValues) => {
            return (
                <Button variant="contained" color="secondary" onClick={(event) => { handleClick(event, cellValues); }}>Delete</Button>
            );
        }
    },
];



class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: [],
            deleteList:[],
            description_his : "",
        };
    }

    componentDidMount() {
        firestore.getAllProduct(this.getAllProductSuccess, this.getAllReject)

    }
    //////////////////////////////////////////////

    onDelete =()=>{

        this.state.productList.forEach(item =>{
            if(item.id == productID ){
                this.setState({description_his: "Delete "+item.name})
                this.setState({description_his: "Delete "+item.name})
                console.log(this.state.description_his)
            }
        });
        firestore.deleteProduct(productID, this.deleteSuccess, this.deleteReject)
        
    }
    addSuccess = (doc) => {
        console.log(doc.id)
        window.location.href="/edit"
    }

    addReject = (error) => {
        console.log(error)
    }

    
    
    deleteSuccess = () => {
        let date = new moment().utcOffset('+07:00').format('DD/MM/YYYY')
        let times = new moment().utcOffset('+07:00').format('HH:mm')
        console.log(times)
        console.log(date)
        const history = {
            firstName : this.props.userList[this.props.userList.length - 1].firstname,
            lastName : this.props.userList[this.props.userList.length - 1].lastname,
            department : this.props.userList[this.props.userList.length - 1].department,
            event : "Delete",
            time : times,
            date : date,
            description_his: this.state.description_his
        }
        firestore.addHistory(history, this.addSuccess, this.addReject)
        console.log('Delete Success')
        window.location.href="/edit"
    }
    
    deleteReject = (error) => {    
        console.log(error)
    }

    //////////////////////////////////////////////

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

    onBack =()=>{
        if(this.props.userList[this.props.userList.length - 1].department === 'Officer'){
            window.location.href="/homeUser"
        }else{
            window.location.href="/homeAdmin"
        }
    }

    

    

    render() {
        return (
            <div id="container">
                <div class="view1">
                    <div style={{ width: '100%', height: '5vh', backgroundColor: '#29292B' }} ></div>
                    <div class='view' >
                        <h1 style={{ color: '#FFB636' }}> PROMSHOP</h1>
                        <h5 style={{ color: '#FFB636' }}> Editor</h5>
                        
                    </div>
                    <div style={{ width: '100%', height: '50vh' }}>
                        <DataGrid className='cssStyle'
                            rows={this.state.productList}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[1]}

                        />
                        <div style={{display: 'flex', flexDirection: 'row',}}>
                            <Button class="button1" style={{marginLeft:'950px',backgroundColor:'white'}} onClick={this.onDelete}>Confirm</Button>
                            <Button  class="button1" onClick={this.onBack}>Back</Button>
                        </div>
                    </div>
                    <div class='view' ></div>
                    <div style={{ width: '100%', height: '5vh', backgroundColor: '#FFB636' }} >
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
        productList: state.productReducer.productList,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
