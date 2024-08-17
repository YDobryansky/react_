import React, { Component } from "react";
import PropTypes from 'prop-types';

class Expand extends Component {
    state = {
        isOpen: false,
    };

    handleToggle = () => {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen,
        }));
    }

    render () {
        return (
            <div className="expand border">
                <div className="expand__header">
                    <span className="expand__title">{this.props.title}</span>
                    <button 
                        className="expand__toggle-btn"
                        onClick={this.handleToggle}>
                        <i className={this.state.isOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}></i>
                    </button>
                </div>
                <div className="expand__content">
                    {this.state.isOpen ? this.props.children : null}
                </div>
            </div>
        );
    }
};

Expand.protoType = {
    isOpen: PropTypes.bool,
    children: PropTypes.element,
    title: PropTypes.string,
    onToggle: PropTypes.func.isRequired
  };
  
  Expand.defaultProps = {
    isOpen: false,
    title: ''
  };

export default Expand;
