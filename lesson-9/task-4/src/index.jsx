import React from "react";
import ReactDOM from "react-dom";
import UsersList from "./UsersList";
import './index.scss';

const users = [
    {id: 0-1, name: 'Tad', age: 18},
    {id: 0-2, name: 'Anna', age: 45},
    {id: 0-3, name: 'Jhon', age: 30},
    {id: 0-4, name: 'Bob', age: 35}
];

const root = document.querySelector('#root');

ReactDOM.render(
    <React.StrictMode>
        <UsersList users={users} />
    </React.StrictMode>, 
    root
);
