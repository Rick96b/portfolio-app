import React from 'react'

import { Advertising, Filter, MainHeader } from 'components'
import styles from './Home.module.scss';

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <MainHeader />
        <Advertising />
        <Filter />
      </div>
    </div>
  )
}
