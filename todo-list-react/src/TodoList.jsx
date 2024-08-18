import PropTypes from 'prop-types'
import React from 'react'
import { TodoItem } from './TodoItem'

import styles from './TodoList.module.scss'

export const TodoList = ({ tasks, deleteTask, toggleTaskStatus }) => {
	return (
		<ul className={styles.list}>
			{tasks.map(task => (
				<TodoItem
					key={task.id}
					task={task}
					deleteTask={deleteTask}
					toggleTaskStatus={toggleTaskStatus}
				/>
			))}
		</ul>
	)
}
TodoList.propTypes = {
	tasks: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			createdAt: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			done: PropTypes.bool.isRequired,
		})
	).isRequired,
}
