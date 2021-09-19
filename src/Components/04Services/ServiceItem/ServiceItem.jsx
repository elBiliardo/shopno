import React, { useState } from 'react'

import styles from './ServiceItem.module.scss'
import arrowMore from '../img/arrowMore.png'
import cross from '../img/cross.png'

export const ServiceItem = ({ serviceItem }) => {
	const [fullInfo, setFullInfo] = useState(serviceItem.id === 1 ? true: false )
	const toogleInfo = () => {
		setFullInfo(prevFullInfo => !prevFullInfo)
	}

	return (
		<div className={fullInfo ? `${styles.itemContainer} ${styles.fullInfo}` : `${styles.itemContainer}`}>
			<div className={styles.serviceItemFront}
				style={{
					background: `linear-gradient(rgba(0, 0, 0, 0.65), 
					rgba(0, 0, 0, 0.65)), 
					center / cover 
					no-repeat url(${serviceItem.serviceBg})`
				}}>
				<div className={styles.frontContent}>
					<h4>{serviceItem.title}</h4>
					<p>{serviceItem.shortText}...</p>
					<button onClick={toogleInfo}>
						Know more
						<img src={arrowMore} alt='Know more' />
					</button>
				</div>
			</div>
			<div className={styles.serviceItemBack}
				style={{
					background: `linear-gradient(rgba(109, 246, 235, 0.95), 
					rgba(109, 246, 235, 0.95)), 
					center / cover 
					no-repeat url(${serviceItem.serviceBg})`
				}}>
				<div className={styles.backContent}>
					<h4>{serviceItem.title}</h4>
					<p>{serviceItem.fullText}</p>
					<button onClick={toogleInfo}>
						<img src={cross} alt='Cross' />
					</button>
				</div>
			</div>
		</div>
	)
}