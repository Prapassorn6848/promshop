import React, { Component } from 'react'
import history from '../history'
import firestore from "../firebase/firestore"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';
import { DataGrid } from '@mui/x-data-grid';

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
                </div>
                <div class='view' ></div>
                <div style={{ width: '100%' ,height:'5vh' , backgroundColor:'#FFB636'}} ></div>
                </div>
            </div>
        )
    }
}


export default History;