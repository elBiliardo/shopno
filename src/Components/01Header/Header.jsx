import React from 'react'
import { Link } from 'react-scroll'

import styles from './Header.module.scss'
import { Navigation } from './Navigation/Navigation'
import { links } from './links'

export const Header = () => {
	return (
		<header className={styles.header} id='header'>
			<div className={styles.wrapper}>
				<div className={styles.headerBody}>
					<Navigation links={links} />
					<h1 className={styles.mainTitle}>
						Say hello to <span>shopno!</span><br /><span>Agency</span> corporate shopno theme
					</h1>
					<Link
						to={'contactUs'}
						spy={true}
						smooth={true}
						duration={1000}>
						<button className={styles.contactBtn}>Contact us</button>
					</Link>
				</div>
			</div>
		</header>
	)
}