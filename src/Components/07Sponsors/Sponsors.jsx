import React from 'react'

import styles from './Sponsors.module.scss'
import sponsorsImg from './img/sponsors.png'

export const Sponsors = () => {
	return <div className={styles.sponsors}>
		<div className={styles.sponsorsBody}>
			<img src={sponsorsImg} alt='sponsors' />
		</div>
	</div>
}