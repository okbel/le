import React, {Children, Component} from 'react';

export default class Provider extends Component {
  constructor(props, context) {
    super(props, context);
    this.store = props.store;
  }

  render() {
    return Children.only(this.props.children);
  }
}