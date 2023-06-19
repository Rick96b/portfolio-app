import React from 'react'
import { Button, Form, Input, Modal, Select, SelectProps } from 'antd';
import { CameraFilled } from '@ant-design/icons';

import styles from "./AddNewProjectModal.module.scss";
import LinkIcon from "assets/Link.svg";
import TextIcon from "assets/Text.svg";

interface AddNewProjectModalProps {
    isOpen: boolean,
    setIsOpen: Function,
    submitFunction: Function
}

  const stackOptions: SelectProps['options'] = [
  {
    label: 'Javascript',
    value: 'Javascript'
  },
  {
    label: 'Rust',
    value: 'Rust'
  },
  {
    label: 'C++',
    value: 'C++'
  },
  {
    label: 'C',
    value: 'C'
  },
  {
    label: 'C#',
    value: 'C#'
  },
  {
    label: 'Python',
    value: 'Python'
  },
  {
    label: 'Java',
    value: 'Java'
  },
  {
    label: 'Go',
    value: 'Go'
  },
  {
    label: 'Kotlin',
    value: 'Kotlin'
  },
  {
    label: 'Typesript',
    value: 'Typesript'
  },
  {
    label: 'Cobol',
    value: 'Cobol'
  },
  {
    label: 'Haskell',
    value: 'Haskell'
  }];

const AddNewProjectModal: React.FC<AddNewProjectModalProps> = ({isOpen, setIsOpen, submitFunction}) => {
  return (
    <Modal 
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        footer={null}
        title='Новый пост'
        className={styles.modal}
    >
        <Form className={styles.modal__form} onFinish={(values: any) => submitFunction(values)}>
            <b className={styles.modal__profileHeader}>О проекте</b>
            <Form.Item 
              className={styles.modal__formItem}
              name="name"
            >
              <Input 
                prefix={<img src={TextIcon} style={{opacity: "0.7"}}/>}
                placeholder='Название проекта'
                className={styles.modal__input}
              />
            </Form.Item>
            <Form.Item
                style={{marginBottom: '0'}}
                className={styles.modal__formItem}
                name="githubLink"
            >
                <Input 
                    prefix={<img src={LinkIcon} />}
                    placeholder='Ссылка на проект'
                    className={styles.modal__input}
                />
            </Form.Item>
            <b className={styles.modal__ArticleInfoHeader}>Стеки</b>
            <Form.Item
                style={{marginBottom: '20px'}}
                className={styles.modal__formItem}
                name="technologies"
            >
              <Select 
                mode="multiple"
                options={stackOptions}
                className={styles.modal__input}
              />
            </Form.Item>
            <b className={styles.modal__ArticleInfoHeader}>Обложка проекта</b>
            <Form.Item
                style={{marginBottom: '8px'}}
                className={styles.modal__formItem}
                name="photo"
            >
                <Input 
                    prefix={<CameraFilled style={{opacity: "0.7"}}/>}

                    placeholder='Загрузить изображение'
                    className={styles.modal__input}
                />
            </Form.Item>
            <span className={styles.modal__underLabel}>Минимальный размер 450x450 px</span>
            <Form.Item
              style={{marginBottom: '0', marginTop: "20px"}}
              className={styles.modal__formItem}
            >
              <Button
                className={styles.modal__submitButton}
                htmlType='submit'
              >
                Сохранить
              </Button>
            </Form.Item>
        </Form>
    </Modal>
  )
}

export default AddNewProjectModal;