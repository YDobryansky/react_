import React from 'react';
import Transaction from './Transaction';
import styles from './Transaction.module.scss';

const TransactionsList = ({ transactions }) => {
  return (
    <ul className={styles.transactions}>
      {transactions.map(({ id, ...transaction }) => (
        <Transaction key={id} {...transaction} />
      ))}
    </ul>
  );
};

export default TransactionsList;
