import React, {Component} from 'react';

class Users extends Component {
  render() {
    const state = this.props.route.getState('users');

    return (
      <div className="Users">
        <h1>Users</h1>
        {
          state.map((user, i) => <li key={i}>{user}</li>)
        }
      </div>
    );
  }
}

export default Users;
