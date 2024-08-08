import React from "react";
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';

const Greeting = ({ isLoggedIn }) => {
  return isLoggedIn ? <UserGreeting /> : <GuestGreeting />
};

export default Greeting;