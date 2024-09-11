import React from 'react'

import styles from './Pagination.module.scss'

const Pagination = ({
	goPrev,
	goNext,
	currentPage,
	totalItems,
	itemsPerPage,
}) => {
	const isPrevPageAvailable = currentPage > 1
	const totalPages = Math.ceil(totalItems / itemsPerPage)
	const isNextPageAvailable = currentPage < totalPages

	return (
		<div className={styles.pagination}>
			<button
				className={styles.btn}
				onClick={goPrev}
				disabled={!isPrevPageAvailable}
			>
				{isPrevPageAvailable && '←'}
			</button>
			<span>{currentPage}</span>
			<button
				className={styles.btn}
				onClick={goNext}
				disabled={!isNextPageAvailable}
			>
				{isNextPageAvailable && '→'}
			</button>
		</div>
	)
}

export default Pagination
