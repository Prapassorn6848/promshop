import { Route, Switch, Router } from 'react-router-dom';
import React, { Component } from 'react'
import history from './history'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <Provider store={configureStore}>

        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Login} />
          </Switch>
        </Router>

      </Provider>
    )
  }
}

export default App;
