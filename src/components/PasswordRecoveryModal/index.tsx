import { Button, Form, Input, Modal } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React from 'react'

import styles from './PasswordRecoveryModal.module.scss';
import './PasswordRecoveryModal.css';

interface PasswordRecoveryModalProps {
  isOpen: boolean,
  setIsOpen: Function,
  openSignIn: Function,
  openNewPasswordAccepted: Function
}

export default function PasswordRecoveryModal({
  isOpen,
  setIsOpen,
  openSignIn,
  openNewPasswordAccepted
}: PasswordRecoveryModalProps) {

  return (
    <Modal 
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        footer={null}
        title='Восстановление пароля'
        className={styles.modal}
    >
        <Form className={styles.modal__form}>
            <Form.Item className={styles.modal__formItem}>
              <Input 
                prefix={<UserOutlined />}
                placeholder='Логин'
                className={styles.modal__input}
              />
            </Form.Item>
            <Form.Item className={styles.modal__formItem}>
                <Input 
                    prefix={<LockOutlined />}
                    type='password'
                    placeholder='Пароль'
                    className={styles.modal__input}
                />
            </Form.Item>
            <Form.Item style={{marginBottom: '0'}}>
              <Button
                className={styles.modal__submitButton}
                onClick={() => {
                  setIsOpen(false);
                  openNewPasswordAccepted(true)
                }}
              >
                Отправить новый пароль
              </Button>
            </Form.Item>
            <Button className={styles.modal__openSignInButton}
                onClick = {() => {
                  setIsOpen(false);
                  openSignIn(true);
                }}
            >
              Вернуться назад
            </Button>
        </Form>
    </Modal>
  )
}
