import React from 'react'

import styles from './MainFooter.module.scss';
import Logo from 'assets/Logo.svg';
import Person from 'assets/Person.svg';

export default function MainFooter() {

  return (
    <footer className={styles.mainFooter}>
        <div className={styles.mainFooter__top}>
            <div className={styles.mainFooter__logoContainer}>
                <img src={Logo} alt='logo'/>
            </div>
            <div className={styles.mainFooter__authContainer}>
                <img src={Person} alt='Person' />
                <p>Войти</p>
            </div>
        </div>
        <div className={styles.mainFooter__bottom}>
            <ul className={styles.mainFooter__linksList}>
                <li className={styles.mainFooter__link}>
                    Настройки Cookies
                </li>
                <li className={styles.mainFooter__link}>
                    Обработка персональных данных
                </li>
                <li className={styles.mainFooter__link}>
                    Политика конфиденциальности
                </li>
            </ul>
            <p className={styles.mainFooter__copyright}>brightdata.com © 2023. All rights reserved.</p>
        </div>
    </footer>
  )
}
