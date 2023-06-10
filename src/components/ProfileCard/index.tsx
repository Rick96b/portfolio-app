import React from 'react'
import { EditOutlined } from '@ant-design/icons';

import styles from './ProfileCard.module.scss';
import TechnologiesList from 'components/TechnologiesList';
import TelegramIcon from 'assets/Telegram.svg';
import VkIcon from 'assets/Vk.svg';

interface Props {
  userName: string
  technologies: Array<string>
  vkLink?: string | undefined
  telegramLink?: string | undefined
}

const ProfileCard: React.FC<Props> = ({ userName, technologies, vkLink = '', telegramLink = ''}) => {
  return (
    <article className={styles.profileCard}>
        <header className={styles.header}>
            <span>{userName}</span>
            <EditOutlined style={{color: "#6B6B6B", fontSize: '13px'}}/>
        </header>
        <main className={styles.main}>
          <p className={styles.description}>
            Я являюсь опытным программистом, 
            обладающим широким спектром навыков и знаний в различных языках программирования.
          </p>
          <TechnologiesList technologies={technologies} />
        </main>
        <footer className={styles.footer}>
          <a href={telegramLink} className={styles.telegramLink}>
            <img src={TelegramIcon} />
          </a>
          <a href={telegramLink} className={styles.vkLink}>
            <img src={VkIcon} />
          </a>
        </footer>
    </article>
  )
}

export default ProfileCard