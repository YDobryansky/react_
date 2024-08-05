import React from 'react';
import './counter.scss';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }

    this.decrement = this.decrement.bind(this);
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  reset () {
    this.setState({ count: 0 });
  }

  render () {
    return (
      <div className="counter">
        <div className="counter__button" onClick={this.decrement}>-</div>
        <div className="counter__value" onClick={() => this.reset()}>{this.state.count}</div>
        <div className="counter__button" onClick={this.increment}>+</div>
      </div>
    );
  }
}

export default Counter;