import React from 'react'

import styles from './SectionTitle.module.scss'

export const SectionTitle = ({ title, subTitle }) => {
	return (
		<>
			<h2 className={styles.sectionTitle}>{title}</h2>
			<h3 className={styles.sectionSubTitle}>{subTitle}</h3>
		</>
	)
}