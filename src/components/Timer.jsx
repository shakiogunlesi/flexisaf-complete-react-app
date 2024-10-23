import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date(),
    });
  }

  render() {
    return (
      <div className="p-6 mb-4 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-2">Current Time</h2>
        <p className="text-xl">{this.state.time.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default Timer;
