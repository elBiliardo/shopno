import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'

import styles from './FormContainer.module.scss'

export const FormContainer = () => {
	const [popup, setPopup] = useState(false)
	const handlePopup = () => {
		setPopup(prevPopup => !prevPopup)
	}


	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm()

	const onSubmit = data => {
		console.log('Data', data)
		handlePopup()
		reset()
	}

	return (
		<div className={styles.contactFormContainer}>
			<form className={styles.contactForm}
				onSubmit={handleSubmit(onSubmit)} noValidate>
				<div className={styles.inputItem}>
					<div className={styles.inputContiner}>
						<label htmlFor='name'>Name*</label>
						<input id='name' type='text' autoComplete='off'
							{...register('name', {
								required: 'This input is required!',
								minLength: {
									value: 2,
									message: 'This input must exceed 1 characters!'
								},
							})} />
					</div>
					{errors.name ? <p className={styles.errorMessage}>{errors.name.message}</p> : null}
					<hr />
				</div>
				<div className={styles.inputItem}>
					<div className={styles.inputContiner}>
						<label htmlFor='subject'>Subject*</label>
						<input id='subject' type='text' autoComplete='off'
							{...register('subject', {
								required: 'This input is required!',
								minLength: {
									value: 2,
									message: 'This input must exceed 1 characters!'
								},
							})} />
					</div>
					{errors.subject ? <p className={styles.errorMessage}>{errors.subject.message}</p> : null}
					<hr />
				</div>
				<div className={styles.inputItem}>
					<div className={styles.inputContiner}>
						<label htmlFor='email'>E-mail*</label>
						<input id='email' type='email' autoComplete='off'
							{...register('email', {
								required: 'This input is required!',
								pattern: {
									value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
									message: 'Please enter a valid email!'
								},
							})} />
					</div>
					{errors.email ? <p className={styles.errorMessage}>{errors.email.message}</p> : null}
					<hr />
				</div>
				<div className={styles.inputItem}>
					<div className={styles.inputContiner}>
						<label htmlFor='message'>Message*</label>
						<textarea id='message' autoComplete='off'
							{...register('message', {
								required: 'This input is required!',
								minLength: {
									value: 2,
									message: 'This input must exceed 1 characters!'
								}
							})} />
					</div>
					{errors.message ? <p className={styles.errorMessage}>{errors.message.message}</p> : null}
					<hr />
				</div>
				<input type='submit' value='Send message' className={styles.submitBtn} />
			</form>
			<div className={popup ? `${styles.popupContainer} ${styles.animPopup}` : styles.popupContainer}>
					<FontAwesomeIcon icon={faCheckCircle} className={styles.checkCircle} />
					<h5>Success!</h5>
					<p>Your data has been successfully sent to the console</p>
					<button onClick={handlePopup}>Okey</button>
				</div>
				{popup ? <div className={styles.popupBg}></div> : null}
		</div>
	)
}