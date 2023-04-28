import React from 'react'

import { Advertising, Filter, MainFooter, ProjectsList } from 'components'
import { MainHeader } from 'containers';
import styles from './Home.module.scss';

interface HomeProps {
  openSignUpModal: Function
}

export default function Home({
  openSignUpModal
}: HomeProps) {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <MainHeader openSignUpModal={openSignUpModal}/>
        <Advertising openSignUpModal={openSignUpModal}/>
        <Filter />
        <ProjectsList />
        <MainFooter openSignUpModal={openSignUpModal}/>
      </div>
    </div>
  )
}
