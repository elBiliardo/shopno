import React from 'react'
import Iframe from 'react-iframe'

import styles from './ContactsContainer.module.scss'

export const ContactsContainer = ({ contacts }) => {
	return (
		<div className={styles.contactsContainer}>
			<div className={styles.realContacts}>
				<p className={styles.realContactItem}>
					Address: <a href={contacts.address1.link}
						target='_blank' rel='noreferrer'>
						{contacts.address1.location}</a>
				</p>
				<p className={styles.realContactItem}>
					Address: <a href={contacts.address2.link}
						target='_blank' rel='noreferrer'>
						{contacts.address2.location}</a>
				</p>
				<p className={styles.realContactItem}>
					Phone: <a href={`tel:${contacts.phone}`}>
						{contacts.phone}</a>
				</p>
				<p className={styles.realContactItem}>
					Fax: <a href={`fax:${contacts.fax}`}>
						{contacts.fax}</a>
				</p>
			</div>
			<div className={styles.virtualContacts}>
				<p className={styles.virtualContactItem}>
					Web: <a href={contacts.web.link} target='_blank' rel='noreferrer'>
						{contacts.web.text}</a>
				</p>
				<p className={styles.virtualContactItem}>
					E-mail: <a href={`mailto:${contacts.mail}`}
						target='_blank' rel='noreferrer'>
						{contacts.mail}</a>
				</p>
			</div>
			<div className={styles.contactMapContainer}>
				<Iframe url={contacts.linkMap}
					className={styles.contactMap}
					loading='eager'/>
			</div>
		</div>
	)
}