import React, {Component} from 'react';

class Configuration extends Component {
  render() {
    const state = this.props.route.getState('configuration');

    return (
      <div className="Configuration">
        <h1>Configuration</h1>
        Config? {state.config ? 'true' : null}
      </div>
    );
  }
}

export default Configuration;
