import React from 'react'

import { Advertising, Filter, MainFooter, ProjectsList } from 'components'
import { MainHeader } from 'containers';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <MainHeader />
        <Advertising />
        <Filter />
        <ProjectsList />
        <MainFooter />
      </div>
    </div>
  )
}
