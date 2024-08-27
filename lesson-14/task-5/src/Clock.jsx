import React, { useState, useEffect } from 'react';
import moment from 'moment';

const getTimeOffset = offset => moment().utcOffset(offset).format('HH:mm:ss A');

const Clock = ({ location, offset }) => {
  const [clock, setClock] = useState(getTimeOffset(offset));

  useEffect(() => {
    const inteval = setInterval(() => {
      setClock(getTimeOffset(offset));
    }, 1000);

    return () => {
      clearInterval(inteval);
    };
  }, [getTimeOffset(offset)]);

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{clock}</div>
    </div>
  );
};

export default Clock;
