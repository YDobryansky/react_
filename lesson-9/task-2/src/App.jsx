import React from "react";
import UserForm from "./UserForm";

class App extends React.Component {
    createUser = userDate => {
        console.log(userDate);
    }

    render () {
        return (
            <div className="app">
                <UserForm onSubmit={this.createUser} />
            </div>
        );
    }
}

export default App;