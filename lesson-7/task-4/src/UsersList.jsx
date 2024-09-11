import React, { useState } from 'react'
import Pagination from './Pagination'
import User from './User'

import styles from './UsersList.module.scss'

const UsersList = ({ users }) => {
	const [currentPage, setCurrentPage] = useState(1)
	const itemsPerPage = 3

	const totalPages = Math.ceil(users.length / itemsPerPage)

	const goPrev = () => {
		setCurrentPage(prevPage => (prevPage > 1 ? prevPage - 1 : prevPage))
	}

	const goNext = () => {
		setCurrentPage(prevPage =>
			prevPage < totalPages ? prevPage + 1 : prevPage
		)
	}

	const startIndex = (currentPage - 1) * itemsPerPage
	const usersToDisplay = users.slice(startIndex, startIndex + itemsPerPage)

	return (
		<div>
			<Pagination
				goPrev={goPrev}
				goNext={goNext}
				currentPage={currentPage}
				totalItems={users.length}
				itemsPerPage={itemsPerPage}
			/>
			<ul className={styles.users}>
				{usersToDisplay.map(user => (
					<User key={user.id} user={user} />
				))}
			</ul>
		</div>
	)
}

export default UsersList
