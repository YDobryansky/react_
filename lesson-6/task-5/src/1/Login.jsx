import React from "react";

const Login = ({ onLogin }) => (
  <button onClick={onLogin} className="login btn">
    Login
  </button>
);

export default Login;