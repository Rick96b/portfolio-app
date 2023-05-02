import React, { useState } from 'react'
import { Button } from 'antd';
import { HeartOutlined, HeartFilled, UserOutlined } from '@ant-design/icons';

import styles from './ProjectCard.module.scss';
import Link from 'assets/Link.svg';
import ProjectCardLogo from 'assets/projectCardLogo.png';
import classNames from 'classnames';


interface ProjectCardProps 
{
  likeState?: boolean,
  likes?: number,
}

export default function ProjectCard({
  likeState, 
  likes = 500
}: ProjectCardProps) {
  const [isLiked, setIsLiked] = useState(likeState);

  return (
    <article className={styles.projectCard}>
      <header className={styles.projectCard__header}>
        <p className={styles.projectCard__person}>
          <UserOutlined className={styles.projectCard__personImg} alt='person'/>
          <span className={styles.projectCard__personName}>alexcoder007</span>
        </p>
        <Button 
          className={classNames(styles.projectCard__likes, isLiked ? styles.projectCard__likes_liked : '')}
          icon={isLiked ? <HeartFilled /> : <HeartOutlined />}
          onClick={() => setIsLiked(!isLiked)}
        >
          {isLiked ? likes + 1 : likes}
        </Button>
      </header>
      <main>
        <img src={ProjectCardLogo} className={styles.projectCard__logo} alt='project logo'/>
        <div className={styles.projectCard__infoContainer}>
          <p className={styles.projectCard__link}>
            <img src={Link} className={styles.projectCard__linkImg} alt='project link'/>
            <a href='/' className={styles.projectCard__linkText}>github</a>
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
