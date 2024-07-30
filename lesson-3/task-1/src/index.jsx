import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import './index.scss';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Search name="Tom" />, rootElement);