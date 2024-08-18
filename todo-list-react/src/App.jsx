import React, { useEffect, useState } from 'react'
import { CreateTask } from './CreateTask'
import { TodoList } from './TodoList'

import './App.scss'
import styles from './TodoList.module.scss'

export const App = () => {
	const [tasks, setTasks] = useState([])

	const fetchTasks = async () => {
		try {
			const response = await fetch(
				'https://66c1e3e6f83fffcb587a863b.mockapi.io/api/v1/tasks'
			)
			const data = await response.json()
			setTasks(data)
		} catch (error) {
			console.error('Failed to fetch tasks:', error)
		}
	}

	const addTask = async newTask => {
		try {
			const response = await fetch(
				'https://66c1e3e6f83fffcb587a863b.mockapi.io/api/v1/tasks',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						...newTask,
						createdAt: new Date().toISOString(),
					}),
				}
			)

			const addedTask = await response.json()

			setTasks(prevTasks => [...prevTasks, addedTask])
		} catch (error) {
			console.error('Failed to add task:', error)
		}
	}

	const deleteTask = async taskId => {
		try {
			await fetch(
				`https://66c1e3e6f83fffcb587a863b.mockapi.io/api/v1/tasks/${taskId}`,
				{
					method: 'DELETE',
				}
			)
			setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId))
		} catch (error) {
			console.error('Failed to delete task:', error)
		}
	}

	const toggleTaskStatus = async (taskId, currentStatus) => {
		try {
			const response = await fetch(
				`https://66c1e3e6f83fffcb587a863b.mockapi.io/api/v1/tasks/${taskId}`,
				{
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						done: !currentStatus,
					}),
				}
			)
			const updatedTask = await response.json()

			setTasks(prevTasks =>
				prevTasks.map(task => (task.id === taskId ? updatedTask : task))
			)
		} catch (error) {
			console.error('Failed to update task status:', error)
		}
	}

	useEffect(() => {
		fetchTasks()
	}, [])

	return (
		<>
			<h1 className={styles.title}>Todo List</h1>
			<main className={styles['todo-list']}>
				<CreateTask addTask={addTask} />
				<TodoList
					tasks={tasks}
					deleteTask={deleteTask}
					toggleTaskStatus={toggleTaskStatus}
				/>
			</main>
		</>
	)
}
