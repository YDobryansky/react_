import React from 'react';
import UserForm from './UserForm';

class App extends React.Component {

    createUser = userData => {
        console.log(userData);
    }

    render() {
        return (
            <div className="app">
                <UserForm onSubmit={this.createUser} />
            </div>
        );
    }
}

export default App;