import React, {Component} from 'react';
import {Link} from 'react-router';

class Main extends Component {
  render() {
    return (
        <div className="Main">
          <ul>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/configuration">settings</Link></li>
          </ul>
          <div>
            {this.props.children}
          </div>
        </div>
    );
  }
}

export default Main;
