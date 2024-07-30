import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting';
import './index.scss';

const rootElem = document.querySelector('#root');

const user = {
  firstName: 'John',
  lastName: 'Doe',
  birthDate: '2007-07-06',
};

ReactDOM.render(
  <Greeting
    firstName={user.firstName}
    lastName={user.lastName}
    birthDate={user.birthDate}
  />, rootElem  
);