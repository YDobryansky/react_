import React from 'react'

import styles from './User.module.scss'

const User = ({ user: { name: userName, age: userAge } }) => {
	return (
		<li className={styles.user}>
			<span className={styles['user__name']}>{userName}</span>
			<span className={styles['user__age']}>{userAge}</span>
		</li>
	)
}

export default User
