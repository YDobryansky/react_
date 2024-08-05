import React from 'react';
import './picker.scss';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  handleMouseEnter = text => {
    this.setState({ title: text });
  }

  handleMouseLeave = () => {
    this.setState({ title: '' });
  }
  
  render() {
    return (
      <div className="picker">
        <div className="picker__title">{this.state.title}</div>
        <div className="picker__buttons">
          <button className="picker__button picker__button_coral"
            onMouseEnter={() => this.handleMouseEnter('Coral')}
            onMouseLeave={this.handleMouseLeave}
            ></button>
          <button className="picker__button picker__button_aqua"
            onMouseEnter={() => this.handleMouseEnter('Aqua')}
            onMouseLeave={this.handleMouseLeave}
            ></button>
          <button className="picker__button picker__button_bisque"
            onMouseEnter={() => this.handleMouseEnter('Bisque')}
            onMouseLeave={this.handleMouseLeave}
            ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;;