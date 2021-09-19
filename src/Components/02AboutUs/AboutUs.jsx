import React from 'react'

import styles from './AboutUs.module.scss'
import { SectionTitle } from '../common/SectionTitle/SectionTitle'
import { AboutUsSlider } from './AboutUsSlider/AboutUsSlider'
import { slides } from './slides'


export const AboutUs = () => {
	return (
		<section className={styles.aboutUs} id='aboutUs'>
			<div className={styles.wrapper}>
				<div className={styles.aboutUsBody}>
					<SectionTitle
						title={'About us'}
						subTitle={'Lorem ipsum dolor sit amet event landing template'} />
					<div className={styles.aboutUsMain}>
						<AboutUsSlider slides={slides} />
						<div className={styles.mainArticle}>
							<h4>We actually do amazing works</h4>
							<p>
								A visual approach is an approach to a runway at an airport conducted under instrument flight rules. The pilot must at all times have either the airport or the preceding aircraft in approach correct sight. conducted under instrument flight rules. The pilot must at all times.
							</p>
							<p>
								Preceding aircraft in approach correct sight. conducted under instrument flight rules.
							</p>
							<h5>Why we are the great?</h5>
							<p>
								A visual approach is an approach to a runway at an airport conducted under instrument flight rules. The preceding aircraft in approach correct sight.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}