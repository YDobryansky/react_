import React, { Component } from 'react';
import './clock.scss';
import moment from 'moment';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.getTimeWithOffset(props.offset),
    };
  }

  getTimeWithOffset = offset => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        time: this.getTimeWithOffset(this.props.offset)
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const timeString = moment(this.state.time).format('hh:mm:ss A');
    
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{timeString}</div>
      </div>
    );
  }
}

export default Clock;