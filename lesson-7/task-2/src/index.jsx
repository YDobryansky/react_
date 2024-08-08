import React from 'react';
import ReactDOM from 'react-dom';
import UsersList from './UsersList';
import users from './users.js'
import './index.scss';

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <UsersList users={users}/>,
  rootElement);