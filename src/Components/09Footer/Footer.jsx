import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPinterestP } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faDribbble } from '@fortawesome/free-brands-svg-icons'

import styles from './Footer.module.scss'

export const Footer = () => {

	return (
		<section className={styles.footer} id='footer'>
			<div className={styles.wrapper}>
				<div className={styles.footerBody}>
					<h5>Follow us</h5>
					<div className={styles.footerSocial}>
						<a href='https://www.pinterest.com/' target='blank'>
							<button className={styles.socialButton}>
								<FontAwesomeIcon icon={faPinterestP} />
							</button>
						</a>
						<a href='https://twitter.com/' target='blank'>
							<button className={styles.socialButton}>
								<FontAwesomeIcon icon={faTwitter} />
							</button>
						</a>
						<a href='https://www.https://www.facebook.com/' target='blank'>
							<button className={styles.socialButton}>
								<FontAwesomeIcon icon={faFacebookF} />
							</button>
						</a>
						<a href='https://dribbble.com/' target='blank'>
							<button className={styles.socialButton}>
								<FontAwesomeIcon icon={faDribbble} />
							</button>
						</a>
					</div>
					<p>Copyright Taras Hnatkiv, All Rights Reserved</p>
				</div>
			</div>
		</section>
	)
}