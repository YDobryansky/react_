import React from "react";

const Logout = ({ onLogout }) => (
  <button onClick={onLogout} className="logout btn">
    Logout
  </button>
);

export default Logout;