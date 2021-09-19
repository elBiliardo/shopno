import React from 'react'

import styles from './Partners.module.scss'
import { SectionTitle } from '../common/SectionTitle/SectionTitle'
import { PartnersSlider } from './PartnersSlider/PartnersSlider'
import { partnersArr } from './partnersArr'

export const Partners = () => {
	return (
		<section className={styles.partners} id='partners'>
			<div className={styles.wrapper}>
				<div className={styles.partnersBody}>
					<SectionTitle
						title='What they says'
						subTitle='Lorem ipsum dolor sit amet event landing template' />
						<PartnersSlider partnersArr={partnersArr}/>
				</div>
			</div>
		</section>
	)
}