import React from 'react'

import styles from './Works.module.scss'
import { SectionTitle } from '../common/SectionTitle/SectionTitle'
import { WorksGallery } from './WorksGallery/WorksGallery'
import { galleryPhotos } from './galleryPhotos'

export const Works = () => {
	return (
		<section className={styles.works} id='works'>
			<div className={styles.wrapper}>
				<div className={styles.worksBody}>
				<SectionTitle 
					title='Featured works'
					subTitle='Lorem ipsum dolor sit amet event landing template'/>
				<WorksGallery galleryPhotos={galleryPhotos}/>
				</div>
			</div>
		</section>
	)
}