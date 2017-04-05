import React, {Component, PropTypes} from 'react'

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const second = this.props.second;
    const txt = this.props.text;
    return (
      <div>
        <div>this is test {txt}</div>
        <div>Clock: {second}</div>
      </div>
    );
  }
}
