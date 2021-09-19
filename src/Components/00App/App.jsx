import React from 'react'

import styles from './App.module.scss'
import { Header } from '../01Header/Header'
import { AboutUs } from '../02AboutUs/AboutUs'
import { Works } from '../03Works/Works'
import { Services } from '../04Services/Services'
import { Team } from '../05Team/Team'
import { Partners } from '../06Partners/Partners'
import { Sponsors } from '../07Sponsors/Sponsors'
import { ContactUs } from '../08ContactUs/ContactUs'
import { Footer } from '../09Footer/Footer'

export const App = () => {
	return (
		<div className={styles.App}>
			<Header />
			<AboutUs />
			<Works />
			<Services />
			<Team />
			<Partners />
			<Sponsors />
			<ContactUs />
			<Footer />
		</div>
	)
}
