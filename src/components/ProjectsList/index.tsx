import React from 'react'

import styles from './ProjectsList.module.scss';
import { ProjectCard } from 'components';

export default function ProjectsList() {
  return (
    <section className={styles.projectsList}>
        <ul className={styles.projectsList__list}>
          <li className={styles.projectsList__item}>
            <ProjectCard />
          </li>
          <li className={styles.projectsList__item}>
            <ProjectCard />
          </li>
          <li className={styles.projectsList__item}>
            <ProjectCard />
          </li>
          <li className={styles.projectsList__item}>
            <ProjectCard />
          </li>
        </ul>
    </section>
  )
}
