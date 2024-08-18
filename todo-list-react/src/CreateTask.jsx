import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

import styles from './TodoList.module.scss'

export const CreateTask = ({ addTask }) => {
	const [taskText, setTaskText] = useState('')

	const handleChange = event => {
		setTaskText(event.target.value)
	}

	const handleCreate = () => {
		if (taskText.trim()) {
			const newTask = { title: taskText, done: false }
			addTask(newTask)
			setTaskText('')
		}
	}

	return (
		<div className={styles['create-task']}>
			<input
				className={styles['create-task__input']}
				type='text'
				value={taskText}
				onChange={handleChange}
			/>
			<button
				className={classNames(styles.btn, styles['create-task__btn'])}
				onClick={handleCreate}
			>
				Create
			</button>
		</div>
	)
}

CreateTask.propTypes = {
	addTask: PropTypes.func.isRequired,
}
