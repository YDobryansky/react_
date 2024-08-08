import React from 'react';
import ReactDOM from 'react-dom';
import TransactionsList from './TransactionsList';
import transactions from './transactions';
import './index.scss';

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <TransactionsList transactions={transactions} />,
  rootElement
);