import React from 'react'

import styles from './TechnologiesList.module.scss';

interface Props {
    technologies: Array<string>
}

const TechnologiesList: React.FC<Props> = ({ technologies }) => {
  return (
    <ul className={styles.technologyStackList}>
      {technologies.map(technology => 
          <li className={styles.technologyStackItem}>
              {technology}
          </li>
      )}
    </ul>
  )
}

export default TechnologiesList;