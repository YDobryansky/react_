import React, { useState } from "react";
import User from "./User";
import Filter from "./Filter";

const UsersList = ({ users }) => {
    const [filterText, setFilterText] = useState('');

    const handleFilterChange = (newFilterText) => {
        setFilterText(newFilterText);
    };

    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <div>
            <Filter 
                filterText={filterText}
                count={filteredUsers.length}
                onChange={(e) => handleFilterChange(e.target.value)}
            />
            <ul className="users">
                {filteredUsers.map(user => (
                    <User 
                        key={user.id}
                        name={user.name}
                        age={user.age}
                    />
                ))}
            </ul>
        </div>
    );
};

export default UsersList;



