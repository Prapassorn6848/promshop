import { Route, Switch, Router } from 'react-router-dom';
import React, { Component } from 'react';
import history from './history';
import Login from './Component/Login';
import View from './Component/View';
import History from './Component/History'
import ForgotPass from './Component/ForgotPass'


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
            <Route exact path="/forgotpass" component={ForgotPass} />
            <Route exact path="/" component={Login} />
            <Route exact path="/history" component={History} />
          </Switch>
        </Router>


    )
  }
}

export default App;
