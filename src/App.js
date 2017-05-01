import React, {Component} from 'react';
import {Router, Route, browserHistory} from 'react-router';

import Main from './Main';
import Users from './views/Users';
import Configuration from './views/Configuration';

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: ['lele', 'bel'],
      configuration: {
        config: true
      }
    };
  }

  getState = state => {
    return this.state[state];
  };

  setState = newState => {
    this.setState(state => newState);
  };

  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path="/" component={Main}>
            <Route path="users" component={Users} getState={this.getState} setState={this.setState} />
            <Route path="configuration" component={Configuration} getState={this.getState} setState={this.setState} />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
