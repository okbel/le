import React from 'react';

export default methods => WrappedComponent => {
  class WithState extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  WithState.methods = methods;

  return WithState;
};