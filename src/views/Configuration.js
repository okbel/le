import React, {Component} from 'react';

class Configuration extends Component {
  handleClick = () => {
    this.props.updateState(state => ({
      ...state,
      configuration: {
        ...state.configuration,
        showUsers: !state.configuration.showUsers
      }
    }));
  };

  render() {
    const {configuration, users} = this.props.getState();
    const {showUsers} = configuration;
    return (
      <div className="Configuration">
        <h1>Configuration</h1>
        <button onClick={this.handleClick}>
          {!showUsers ? 'Show Users' : 'Hide Users'}
        </button>
        {showUsers
          ? <div>
              {users.map((user, i) => <li key={i}>{user}</li>)}
            </div>
          : null}
      </div>
    );
  }
}

export default Configuration;
