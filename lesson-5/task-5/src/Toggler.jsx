import React from 'react';
import './toggler.scss';

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggler: 'Off',
    };
  }

  toggleState = () => {
    this.setState((prevState) => ({
      toggler: prevState.toggler === 'Off' ? 'On' : 'Off',
    }));
  }

  render() {
    return (
      <div className='toggler' onClick={this.toggleState}>
        {this.state.toggler}
      </div>
    );
  }
}

export default Toggler;