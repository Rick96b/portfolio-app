import React from 'react'

import styles from './Profile.module.scss';
import { ProfileCard, ProjectsList } from 'components';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <ProfileCard 
        userName='Chel' 
        technologies={['Javascript', 'Python', 'Haskell', "Go"]} 
        vkLink=''
        telegramLink=''
      />
      <ProjectsList />
    </div>
  )
}

export default Profile;