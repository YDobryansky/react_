import moment from 'moment';
import React from 'react';
import styles from './Transaction.module.scss';

const Transaction = ({ from, to, amount, rate, time }) => {
  const formattedAmount = new Intl.NumberFormat('en-GB').format(amount);
  const formattedRate = new Intl.NumberFormat('en-GB').format(rate);
  const formattedDate = moment(time).format('DD MMM');
  const formattedTime = moment(time).format('HH:mm');

  return (
    <li className={styles.transaction}>
      <span className={styles.transaction__date}>{formattedDate}</span>
      <span className={styles.transaction__time}>{formattedTime}</span>
      <span className={styles.transaction__assets}>
        {from} → {to}
      </span>
      <span className={styles.transaction__rate}>{formattedRate}</span>
      <span className={styles.transaction__amount}>{formattedAmount}</span>
    </li>
  );
};

export default Transaction;
