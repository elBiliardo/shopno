import React from 'react'

import styles from './ContactUs.module.scss'
import { contacts } from './contacts'
import { FormContainer } from './FormContainer/FormContainer'
import { ContactsContainer } from './ContactsContainer/ContactsContainer'

export const ContactUs = () => {
	return (
		<section className={styles.contactUs} id='contactUs'>
			<div className={styles.wrapper}>
				<div className={styles.contactUsBody}>
					<FormContainer />
					<ContactsContainer contacts={contacts}/> 
				</div>
			</div>
		</section>
	)
}