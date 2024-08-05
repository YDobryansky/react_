import React from 'react';
import './fancy.scss';

class GoodButton extends React.Component {
  handleClick (event) {
    return alert(event.target.textContent);
  }
  
  render () {
    return (
      <button className="fancy-button" onClick={this.handleClick}>
      Good Button
      </button>
    );
  }
}

export default GoodButton;