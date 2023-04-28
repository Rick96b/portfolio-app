import React from 'react'
import { Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import styles from './MainHeader.module.scss';
import Logo from 'assets/Logo.svg';


interface MainHeaderProps {
  setModalVisibility: Function
}

export default function MainHeader({
    setModalVisibility
  }: MainHeaderProps) {

  return (
    <header className={styles.mainHeader}>
      <div className={styles.mainHeader__logoContainer}>
        <img src={Logo} alt='logo'/>
      </div>
      <Button className={styles.mainHeader__authButton} onClick={() => setModalVisibility(true)}>
        <UserOutlined />
        <p>Войти</p>
      </Button>
    </header>
  )
}
