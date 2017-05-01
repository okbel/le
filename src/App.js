import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Users from './views/Users';
import Configuration from './views/Configuration';

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: ['lele', 'bel'],
      configuration: {
        showUsers: false,
        config: true
      }
    };
  }

  getState = (stateKey = '') => {
    const isStateKey = this.state.hasOwnProperty(stateKey);

    if (isStateKey) {
      return this.state[stateKey];
    } else {
      return this.state;
    }
  };

  updateState = (cb = () => {}) => {
    this.setState(cb);
  };

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Main</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/configuration">Configuration</Link></li>
          </ul>

          <hr />

          <Route
            exact
            path="/"
            render={() => (
              <Users getState={this.getState} updateState={this.updateState} />
            )}
          />
          <Route
            path="/users"
            render={() => (
              <Users getState={this.getState} updateState={this.updateState} />
            )}
          />
          <Route
            path="/configuration"
            render={() => (
              <Configuration
                getState={this.getState}
                updateState={this.updateState}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
