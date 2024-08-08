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
