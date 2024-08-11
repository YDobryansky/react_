import moment from 'moment';
import React from 'react';
import styles from './Transaction.module.scss';

const Transaction = ({ from, to, amount, rate, time }) => {
  const formattedDate = moment(time).format('DD MMM');
  const formattedTime = moment(time).format('HH:mm');
  const formattedAmount = new Intl.NumberFormat('en-GB').format(amount);

  return (
    <li className={styles.transaction}>
      <span className={styles.transaction__date}>{formattedDate}</span>
      <span className={styles.transaction__time}>{formattedTime}</span>
      <span className={styles.transaction__assets}>{`${from} → ${to}`}</span>
      <span className={styles.transaction__rate}>{rate}</span>
      <span className={styles.transaction__amount}>{formattedAmount}</span>
    </li>
  );
};

export default Transaction;
