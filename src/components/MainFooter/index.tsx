import React from 'react'
import { Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import styles from './MainFooter.module.scss';
import Logo from 'assets/Logo.svg';


interface MainFooterProps {
    user: object,
    openSignUpModal: Function
}

export default function MainFooter({
    user,
    openSignUpModal
}: MainFooterProps) {
  return (
    <footer className={styles.mainFooter}>
        <div className={styles.mainFooter__top}>
            <div className={styles.mainFooter__logoContainer}>
                <img src={Logo} alt='logo'/>
            </div>
            <Button className={styles.mainFooter__authButton} onClick={() => openSignUpModal(true)}>
                <UserOutlined />
                <p>Войти</p>
            </Button>
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
