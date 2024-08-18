import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './TodoList.module.scss'

export const TodoItem = ({ task, deleteTask, toggleTaskStatus }) => {
	const handleCheckboxChange = () => {
		toggleTaskStatus(task.id, task.done)
	}

	return (
		<li
			className={classNames(
				styles['list-item'],
				task.done ? styles['list-item_done'] : ''
			)}
		>
			<input
				type='checkbox'
				className={styles['list-item__checkbox']}
				checked={task.done}
				onChange={handleCheckboxChange}
			/>
			{task.title}
			<button
				className={styles['list-item__delete-btn']}
				onClick={() => deleteTask(task.id)}
			></button>
		</li>
	)
}

TodoItem.propTypes = {
	task: PropTypes.shape({
		id: PropTypes.string.isRequired,
		createdAt: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		done: PropTypes.bool.isRequired,
	}).isRequired,
}
