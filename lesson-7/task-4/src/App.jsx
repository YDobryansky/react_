import React from 'react'

import UsersList from './UsersList'

import users from './users.js'

import './App.scss'

export const App = () => {
	return (
		<>
			<h1>Key & pagination</h1>
			<main>
				<UsersList users={users} />
			</main>
		</>
	)
}
