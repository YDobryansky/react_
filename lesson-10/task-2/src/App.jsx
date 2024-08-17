import React, { Component } from "react";
import ShoppingCart from './ShoppingCart';
import Profile from './Profile';

class App extends Component {
    state = {
        userData: {
            firstName: 'John',
            lastName: 'Doe'
        }
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            userData: {
                ...this.state.userData,
                [name]: value
            }
        });
    }

    render () {
        const { userData } = this.state;
        const userName = `${userData.firstName}`;

        return (
            <div className="page">
            <h1 className="title">{`Hello, ${userData.firstName} ${userData.lastName}`}</h1>
            <main className="content">
              <ShoppingCart userName={userName} />
              <Profile userData={userData} handleChange={this.handleChange} />
            </main>
          </div>
        );
    }
}

export default App;