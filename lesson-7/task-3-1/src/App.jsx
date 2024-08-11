import React from 'react';
import TransactionsList from './TransactionList';
import transactions from './transactions.js';

import './App.scss';

console.log(transactions);

export const App = () => (
  <>
    <h1>Transaction List</h1>
    <TransactionsList transactions={transactions} />
  </>
);
