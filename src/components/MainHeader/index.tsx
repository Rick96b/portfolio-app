import React from 'react'
import { Button, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { UserOutlined, PlusOutlined } from '@ant-design/icons';

import styles from './MainHeader.module.scss';
import './MainHeader.css';
import Logo from 'assets/Logo.svg';
import Exit from 'assets/Exit.svg';
import type { User } from 'Types';
import { Link } from 'react-router-dom';

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
      <Link target="_blank" rel="noopener noreferrer" to="/profile">
        Мой профиль
      </Link>
    ),
  },
  {
    key: '3',
    icon: <img src={Exit} alt='exit'/>,
    label: 'Выйти',
  },
];

interface MainHeaderProps {
  user?: User,
  openSignUpModal: Function,
}

export default function MainHeader({
  user,
  openSignUpModal,
}: MainHeaderProps) {
  return (
    <header className={styles.mainHeader}>
      <div className={styles.mainHeader__logoContainer}>
        <img src={Logo} alt='logo'/>
      </div>
      <Button className={styles.mainHeader__authButton} onClick={user ? () => {} : () => openSignUpModal(true)}>
        <UserOutlined />
        {
          user ?
          <Dropdown 
            menu={{ items: dropdownItems }}  
            trigger={['click']} 
            overlayClassName={styles.mainHeader__userDropdown}
          >
            <p>{user.name}</p>
          </Dropdown>
          :
          <p>Войти</p>
        }
      </Button>
    </header>
  )
}
