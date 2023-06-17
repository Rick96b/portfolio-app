import { Button, Form, Input, Modal } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React from 'react'

import styles from './PasswordChangeModal.module.scss';

interface PasswordChangeModal {
  isOpen: boolean,
  setIsOpen: Function,
}

const PasswordChangeModal:React.FC<PasswordChangeModal> = ({
  isOpen,
  setIsOpen,
}) => {

  return (
    <Modal 
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        footer={null}
        title='Восстановление пароля'
        className={styles.modal}
    >
        <Form className={styles.modal__form}>
            <Form.Item 
              className={styles.modal__formItem}
              name="password"
            >
              <Input 
                prefix={<LockOutlined />}
                type='password'
                placeholder='Пароль'
                className={styles.modal__input}
              />
            </Form.Item>
            <Form.Item 
              className={styles.modal__formItem}
              name="password"
            >
              <Input 
                prefix={<LockOutlined />}
                type='password'
                placeholder='Новый пароль'
                className={styles.modal__input}
              />
            </Form.Item>
            <Form.Item 
              className={styles.modal__formItem}
              name="passwordConfirm"
            >
              <Input 
              prefix={<LockOutlined />}
                type='password'
                placeholder='Повторите пароль'
                className={styles.modal__input}
              />
            </Form.Item>
            <Form.Item style={{marginBottom: '0'}}>
              <Button
                className={styles.modal__submitButton}
                htmlType='submit'
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Поменять пароль
              </Button>
            </Form.Item>
        </Form>
    </Modal>
  )
}

export default PasswordChangeModal;
