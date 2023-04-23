import React from 'react'

import styles from './ProjectCard.module.scss';
import Person from 'assets/Person.svg';
import Heart from 'assets/Heart.svg';
import Link from 'assets/Link.svg';
import ProjectCardLogo from 'assets/projectCardLogo.png';

export default function ProjectCard() {
  return (
    <article className={styles.projectCard}>
      <header className={styles.projectCard__header}>
        <p className={styles.projectCard__person}>
          <img src={Person} className={styles.projectCard__personImg}/>
          <span className={styles.projectCard__personName}>alexcoder007</span>
        </p>
        <p className={styles.projectCard__likes}>
          <img src={Heart} className={styles.projectCard__likesImg}/>
          <span className={styles.projectCard__likesCount}>500</span>
        </p>
      </header>
      <main>
        <img src={ProjectCardLogo} className={styles.projectCard__logo}/>
        <div className={styles.projectCard__infoContainer}>
          <p className={styles.projectCard__link}>
            <img src={Link} className={styles.projectCard__linkImg} />
            <a href='#' className={styles.projectCard__linkText}>github</a>
          </p>
          <p className={styles.projectCard__text}>
            CodeCraft: разработка инновационных решений с использованием передовых технологий
          </p>
          <ul className={styles.projectCard__technologyStackList}>
            <li className={styles.projectCard__technologyStackItem}>
              Javascript
            </li>
            <li className={styles.projectCard__technologyStackItem}>
              Haskell
            </li>
            <li className={styles.projectCard__technologyStackItem}>
              Go
            </li>
            <li className={styles.projectCard__technologyStackItem}>
              Python
            </li>
          </ul>
        </div>
      </main>
    </article>
  )
}
