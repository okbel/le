import React, {Component} from 'react';

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: ''
    };
  }

  handleKeyPress = e => {
    if (e.keyCode === 13) {
      const {newUser} = this.state;

      // Add new user to the main state
      this.props.updateState(state => ({
        users: [...state.users, newUser]
      }));

      // Cleaning the newUser
      this.setState({newUser: ''});
    }
  };

  handleInputChange = e => {
    this.setState({newUser: e.target.value});
  };

  render() {
    const state = this.props.getState('users');

    return (
      <div className="Users">
        <h1>Users</h1>
        <input
          onChange={this.handleInputChange}
          onKeyDown={this.handleKeyPress}
          value={this.state.newUser}
        />
        {state.map((user, i) => <li key={i}>{user}</li>)}
      </div>
    );
  }
}

export default Users;
