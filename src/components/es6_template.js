import React, {Component, PropTypes} from 'react'

const propType = {
  optionalString: PropTypes.string
}

export default class Name extends Component {
  state = {}

  handle = () => {
    this.setState((prevState) => ({
      secondsElapsed: prevState.secondsElapsed + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.handle(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>Seconds Elapsed: {this.state.handle}</div>
    );
  }
}

Name.propTypes =  propType
