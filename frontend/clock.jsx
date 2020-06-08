import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date()};
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.timeInterval = setInterval(this.tick, 1000)
  }

  cmoponentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  tick() {
    this.setState({time: new Date()})
  }

  render() {
    let hours = this.state.time.getHours();
    let mins = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();

    hours = (hours < 10) ? `0${hours}`: (hours);
    mins = (mins < 10) ? `0${mins}` : mins;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;

    return(
      <div className="clock">
        <h1>Clock</h1>
        <span className="clock-time">
          {hours}:{mins}:{seconds} PST
        </span>

        <h1 className="date">Date</h1>
        <span className="date-time">
          {this.state.time.toDateString()}
        </span>
      </div>
    )
  }
}

export default Clock;