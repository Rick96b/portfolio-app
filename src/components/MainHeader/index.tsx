import React from 'react'

import styles from './MainHeader.module.scss';
import Logo from 'assets/Logo.svg';
import Person from 'assets/Person.svg';

export default function MainHeader() {
  return (
    <header className={styles.mainHeader}>
      <div className={styles.mainHeader__logoContainer}>
        <img src={Logo} alt='logo'/>
      </div>
      <div className={styles.mainHeader__authContainer}>
        <img src={Person} alt='Person' />
        <p>Войти</p>
      </div>
    </header>
  )
}
