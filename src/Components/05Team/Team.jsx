import React from 'react'

import styles from './Team.module.scss'
import { SectionTitle } from '../common/SectionTitle/SectionTitle'
import { TeamMember } from './TeamMember/TeamMember'
import { teamMembersArr } from './teamMembersArr'

export const Team = () => {
	return (
		<section className={styles.team} id='team'>
			<div className={styles.wrapper}>
				<div className={styles.teamBody}>
					<SectionTitle
						title={'Small team'}
						subTitle={'Lorem ipsum dolor sit amet event landing template'} />
					<div className={styles.teamMembers}>
						{teamMembersArr.map(teamMember => <TeamMember
						teamMember={teamMember}
						key={teamMember.id}/>)}
					</div>
				</div>
			</div>
		</section>
	)
}