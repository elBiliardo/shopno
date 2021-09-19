import React from 'react'

import styles from './Services.module.scss'
import { SectionTitle } from '../common/SectionTitle/SectionTitle'
import { ServiceItem } from './ServiceItem/ServiceItem'
import { serviceItemsArr } from './serviceItemsArr'

export const Services = () => {
	return (
		<section className={styles.services} id='services'>
			<div className={styles.wrapper}>
				<div className={styles.servicesBody}>
					<SectionTitle
						title={'Our services'}
						subTitle={'Lorem ipsum dolor sit amet event landing template'} />
					<div className={styles.serviceItems}>
						{serviceItemsArr.map(serviceItem => <ServiceItem
							key={serviceItem.id}
							serviceItem={serviceItem} />)}
					</div>
				</div>
			</div>
		</section>
	)
}