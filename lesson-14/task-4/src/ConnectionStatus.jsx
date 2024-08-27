import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

const ConnectionsStatus = () => {
  const [status, setStatus] = useState('online');

  useEffect(() => {
    const isOnline = () => {
      setStatus('online');
    };

    const isOffline = () => {
      setStatus('offline');
    };

    window.addEventListener('online', isOnline);
    window.addEventListener('offline', isOffline);

    return () => {
      window.removeEventListener('online', isOnline);
      window.removeEventListener('offline', isOffline);
    };
  }, []);

  return (
    <div className={classNames('status', { status_offline: status === 'offline' })}>{status}</div>
  );
};

export default ConnectionsStatus;
