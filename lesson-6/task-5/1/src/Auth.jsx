import React, { useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import Spinner from "./Spinner";

const Auth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsLoggedIn(true);
    }, 2000);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (loading) {
    return <Spinner size="50px" />;
  }

  return (
    <div>
      {isLoggedIn ? (
        <Logout onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default Auth;


/*
import React, { Component } from "react";
import Login from "./Login";
import Logout from "./Logout";
import Spinner from "./Spinner";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      loading: false
    };
  }

  handleLogin = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({
        loading: false,
        isLoggedIn: true
      });
    }, 2000);
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const { loading, isLoggedIn } = this.state;

    if (loading) {
      return <Spinner size="50px" />;
    }

    return (
      <div>
        {isLoggedIn ? (
          <Logout onLogout={this.handleLogout} />
        ) : (
          <Login onLogin={this.handleLogin} />
        )}
      </div>
    );
  }
}

export default Auth;
*/
// REACT APPROACH
// 1. Divide the UI into component +++
// header, footer, main(text, table(row), navigation)
// 2. build static version in React +++
// 3. Thing about props, state(where, which) +++
// 4. Write logic in JS/TS (80% JS vs. 20% React)
