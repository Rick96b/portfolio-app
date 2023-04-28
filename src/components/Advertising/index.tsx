import React from 'react'
import MediaQuery from 'react-responsive';

import styles from './Advertising.module.scss';
import LogoText from 'assets/LogoText.svg';

interface AdvertisingProps {
  openSignUpModal: Function
}

export default function Advertising({
  openSignUpModal
}: AdvertisingProps) {
  return (
    <section className={styles.advertising}>
        <MediaQuery minWidth={786}>
            <img src={LogoText} className={styles.advertising__logoText}/>
        </MediaQuery>
        <div className={styles.advertising__contentContainer}>
            <p className={styles.advertising__text}>
                Создана для программистов со всего мира. 
                Общайся и делись знаниями с коллегами из разных уголков планеты, 
                получай новые идеи и решения для своих проектов. 
                Присоединяйся к нам и становись частью сообщества бесконечных возможностей!
            </p>
            <button className={styles.advertising__joinButton} onClick={() => openSignUpModal(true)}>Присоединяйся</button>
        </div>
    </section>
  )
}
