import { Route, Switch, Router } from 'react-router-dom';
import React, { Component } from 'react';
import history from './history';
import Login from './Component/Login';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (


        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Login} />
          </Switch>
        </Router>


    )
  }
}

export default App;
