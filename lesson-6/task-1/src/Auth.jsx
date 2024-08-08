import React, { useState } from 'react'
import Greeting from './Greeting'
import Login from './Login'
import Logout from './Logout'

const Auth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className='panel'>
      <Greeting isLoggedIn={isLoggedIn} />
      {isLoggedIn ? <Logout onLogout={handleLogout} /> : <Login onLogin={handleLogin} />}
    </div>
  );
};

export default Auth;
