import React from 'react';
import ReactDOM from 'react-dom';
import Toggler from './Toggler';
import './index.scss';

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <Toggler />,
  rootElement);