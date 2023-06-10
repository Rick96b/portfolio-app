import React from 'react'
import { Button, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { UserOutlined, PlusOutlined } from '@ant-design/icons';

import styles from './MainFooter.module.scss';
import Logo from 'assets/Logo.svg';
import Exit from 'assets/Exit.svg';
import type { User } from 'Types';


const dropdownItems: MenuProps['items'] = [
    {
      key: '1',
      icon: <PlusOutlined />,
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Разместить проект
        </a>
      ),
    },
    {
      key: '2',
      icon: <UserOutlined />,
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Мой профиль
        </a>
      ),
    },
    {
      key: '3',
      icon: <img src={Exit} alt='exit'/>,
      label: 'Выйти',
    },
  ];

interface MainFooterProps {
    user: User,
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
            {
            user ?
                <Dropdown menu={{ items: dropdownItems }} overlayClassName={styles.mainFooter__userDropdown}>
                    <p>{user.name}</p>
                </Dropdown>
            :
                <p>Войти</p>
            }
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
