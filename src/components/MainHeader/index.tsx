import React from 'react'
import { Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import styles from './MainHeader.module.scss';
import Logo from 'assets/Logo.svg';


interface MainHeaderProps {
  openSignUpModal: Function
}

export default function MainHeader({
  openSignUpModal
}: MainHeaderProps) {
  return (
    <header className={styles.mainHeader}>
      <div className={styles.mainHeader__logoContainer}>
        <img src={Logo} alt='logo'/>
      </div>
      <Button className={styles.mainHeader__authButton} onClick={() => openSignUpModal(true)}>
        <UserOutlined />
        <p>Войти</p>
      </Button>
    </header>
  )
}
