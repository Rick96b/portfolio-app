import React from 'react'

import { Advertising, Filter, ProjectsList} from 'components';
import styles from './Home.module.scss';


interface HomeProps {
  setSignUpModalVisibility: Function,
}

export default function Home({
  setSignUpModalVisibility
}: HomeProps) {
  
  return (
    <>
      <div className={styles.home}>
        <Advertising openSignUpModal={setSignUpModalVisibility}/>
        <Filter />
        <ProjectsList />
      </div>
    </>
  )
}
