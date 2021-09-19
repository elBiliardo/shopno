import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faDribbble } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

import styles from './TeamMember.module.scss'

export const TeamMember = ({ teamMember }) => {
	const [fullInfo, setfullInfo] = useState(teamMember.id === 2 ? true : false)
	const handleFullInfo = () => {
		setfullInfo(prevInfo => !prevInfo)
	}


	return (
		<div className={styles.memberContainer}>
			<div className={styles.memberAvatar} 
			onClick={handleFullInfo}>
				<img src={teamMember.avatar} alt='Member avatar' />
			</div>
			<div className={fullInfo ? `${styles.memberInfo} ${styles.show}` : `${styles.memberInfo}`}>
				<h4 className={styles.mainInfo}>
					{teamMember.name}
					<span> / {teamMember.position}</span>
				</h4>
				<p > {teamMember.quote} </p>
				<div className={styles.socialLinks}>
					<a href={teamMember.fLink} target='_blank' rel='noreferrer'>
						<button>
							<FontAwesomeIcon icon={faFacebookF} />
						</button>
					</a>
					<a href={teamMember.tLink} target='_blank' rel='noreferrer'>
						<button>
							<FontAwesomeIcon icon={faTwitter} />
						</button>
					</a>
					<a href={teamMember.dLink} target='_blank' rel='noreferrer'>
						<button>
							<FontAwesomeIcon icon={faDribbble} />
						</button>
					</a>
					<a href={teamMember.gLink} target='_blank' rel='noreferrer'>
						<button>
							<FontAwesomeIcon icon={faEnvelope} />
						</button>
					</a>
				</div>
			</div>
		</div>
	)
}