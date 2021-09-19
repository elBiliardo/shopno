import React from 'react'

import styles from'./WorksGallery.module.scss'

import LightGallery from 'lightgallery/react'
// import styles
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail'

export const WorksGallery = ({ galleryPhotos }) => {
	return (
		<LightGallery
			speed={500}
			plugins={[lgThumbnail]}
			elementClassNames={styles.worksGallery}>

			{galleryPhotos.map(galleryPhoto => <a 
			data-lg-size='370-359'
			href={galleryPhoto.photo}
			className={styles.galleryPhoto} 
			key={galleryPhoto.id}>
				<img alt={`Gallery #${galleryPhoto.id}`} src={galleryPhoto.photo} />
			</a>)}
		</LightGallery>
	)
}
