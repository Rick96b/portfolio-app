import React from 'react'
import { Form, Select } from 'antd'

import styles from './Filter.module.scss';

export default function Filter() {

  return (
    <Form className={styles.filter}>
      <p className={styles.filter__name}>Новые проекты</p>
      <Form.Item
        className={styles.filter__formItem}
      >
        <Select 
          defaultValue='Все стеки'
          className={styles.filter__input}
        />
      </Form.Item>
      <Form.Item 
        className={styles.filter__formItem}
      >
        <Select 
          defaultValue='Сначала популярные'
          className={styles.filter__input}
        />
      </Form.Item>
    </Form>
  )
}
