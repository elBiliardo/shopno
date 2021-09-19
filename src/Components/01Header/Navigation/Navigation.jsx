import React, { useState } from 'react'
import { Link } from 'react-scroll'

import styles from './Navigation.module.scss'
import logo from '../img/logo.png'

export const Navigation = ({ links }) => {
	const [menuState, setMenuState] = useState(false)
	const [navWrapper, setNnavWrapper] = useState(false)

	const handleMenu = () => {
		setMenuState(preMenuState => !preMenuState)
		document.body.classList.toggle(`${styles.lock}`)
	}
	const closeMenu = () => {
		setMenuState(false)
		document.body.classList.remove(`${styles.lock}`)
	}

	const changeNavWrapper = () => {
		if (window.innerWidth > 900) {
			if (window.scrollY >= 54) {
				setNnavWrapper(true)
			} else {
				setNnavWrapper(false)
			}
		} else {
			setNnavWrapper(true)
		}
	}
	window.addEventListener('scroll', changeNavWrapper)
	window.addEventListener('resize', changeNavWrapper)

	return (
		<>
			<div className={navWrapper ? styles.navPad : null}></div>
			<div className={navWrapper ? styles.navWrapper : null}>
				<nav className={styles.nav}>
					<Link
						to={'header'}
						spy={true}
						smooth={true}
						duration={1000}
						className={styles.logo}
						onClick={closeMenu}>
						<img src={logo} alt='Logo' />
					</Link>

					<div
						className={menuState ? `${styles.menuIcon} ${styles.activeMenuIcon}` : styles.menuIcon}
						onClick={handleMenu}>
						<span></span>
					</div>

					<ul className={menuState ? `${styles.menu} ${styles.activeMenu}` : styles.menu}>
						{links.map(link => <li className={styles.menuItem} key={link.id}>
							<Link
								activeClass={styles.activeLink}
								to={link.url}
								spy={true}
								smooth={true}
								offset={-66}
								duration={1000}
								onClick={closeMenu}>
								{link.title}
							</Link>
						</li>)}
					</ul>
				</nav>
			</div>
		</>
	)
}