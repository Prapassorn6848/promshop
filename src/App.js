import { Route, Switch, Router } from 'react-router-dom';
import React, { Component } from 'react';
import history from './history';
import Login from './Component/Login';
import View from './Component/View';
import History from './Component/History'
import ForgotPass from './Component/ForgotPass'
import Sign_Up from './Component/Sign_Up'
import HomeUser from './Component/HomeUser'
import HomeAdmin from './Component/HomeAdmin'


import Edit from './Component/Edit'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (


        <Router history={history}>
          <Switch>
            <Route exact path="/view" component={View} />
            <Route exact path="/signup" component={Sign_Up} />
            <Route exact path="/forgotpass" component={ForgotPass} />
            <Route exact path="/" component={Login} />
            <Route exact path="/history" component={History} />
            <Route exact path="/edit" component={Edit} />
            <Route exact path="/homeAdmin" component={HomeAdmin} />
            <Route exact path="/homeUser" component={HomeUser} />

          </Switch>
        </Router>


    )
  }
}

export default App;
