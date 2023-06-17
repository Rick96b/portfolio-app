import React from 'react'
import { Button, Form, Input, Modal } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined, AlignCenterOutlined  } from '@ant-design/icons';

import styles from "./AddNewProjectModal.module.scss";
import TelegramIcon from 'assets/Telegram.svg';
import VkIcon from 'assets/Vk.svg';
import TextArea from 'antd/es/input/TextArea';

interface AddNewProjectModalProps {
    isOpen: boolean,
    setIsOpen: Function
}

const AddNewProjectModal: React.FC<AddNewProjectModalProps> = ({isOpen, setIsOpen}) => {
  return (
    <Modal 
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        footer={null}
        title='Ваш профиль'
        className={styles.modal}
    >
        <Form className={styles.modal__form}>
            <b className={styles.modal__profileHeader}>Профиль</b>
            <Form.Item className={styles.modal__formItem}>
              <Input 
                prefix={<UserOutlined />}
                placeholder='Логин'
                className={styles.modal__input}
              />
            </Form.Item>
            <Form.Item
                style={{marginBottom: '0'}}
                className={styles.modal__formItem}
            >
                <Input 
                    prefix={<MailOutlined />}
                    type='email'
                    placeholder='Email'
                    className={styles.modal__input}
                />
            </Form.Item>
            <Button className={styles.modal__resetPasswordButton} 
              onClick={() => {
                setIsOpen(false)
              }}>
                <LockOutlined /> Изменить пароль?
            </Button>    
            <b className={styles.modal__ArticleInfoHeader}>Дополнительная информация</b>
            <Form.Item
                style={{marginBottom: '20px'}}
                className={styles.modal__formItem}
            >
                <TextArea rows={4}
                    style={{resize: "none"}}
                    placeholder='Дополнительная информация'
                    className={styles.modal__input}
                />
            </Form.Item>
            <Form.Item
                style={{marginBottom: '20px'}}
                className={styles.modal__formItem}
            >
                <Input 
                    prefix={<img src={TelegramIcon} />}
                    placeholder='Ссылка на телеграм'
                    className={styles.modal__input}
                />
            </Form.Item>
            <Form.Item
                style={{marginBottom: '20px'}}
                className={styles.modal__formItem}
            >
                <Input 
                    prefix={<img src={VkIcon} />}

                    placeholder='Ссылка на Vk'
                    className={styles.modal__input}
                />
            </Form.Item>
            <Form.Item
              style={{marginBottom: '0'}}
              className={styles.modal__formItem}
            >
              <Button
                className={styles.modal__submitButton}
              >
                Сохранить
              </Button>
            </Form.Item>
        </Form>
    </Modal>
  )
}

export default AddNewProjectModal;