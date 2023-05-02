import React, {useState} from 'react'

import { Advertising, Filter, MainFooter, ProjectsList, NewPasswordAcceptedModal, PasswordRecoveryModal, SignInModal, SignUpModal } from 'components';
import { MainHeader } from 'containers';
import { User } from 'Types';

import styles from './Home.module.scss';


interface HomeProps {
  user: User,
}

export default function Home({
  user
}: HomeProps) {
  const [isSignUpModalVisible, setSignUpModalVisibility] = useState(false)
  const [isSignInModalVisible, setSignInModalVisibility] = useState(false)
  const [isPasswordRecoveryModalVisible, setPasswordRecoveryModalVisibility] = useState(false)
  const [isNewPasswordAcceptedModalVisible, setNewPasswordAcceptedModalVisibility] = useState(false);

  return (
    <>
      <div className={styles.home}>
        <div className={styles.container}>
          <MainHeader openSignUpModal={setSignUpModalVisibility} user={user}/>
          <Advertising openSignUpModal={setSignUpModalVisibility}/>
          <Filter />
          <ProjectsList />
          <MainFooter openSignUpModal={setSignUpModalVisibility} user={user}/>
        </div>
      </div>
      <SignUpModal 
        isOpen={isSignUpModalVisible} 
        setIsOpen={setSignUpModalVisibility} 
        openSignIn={setSignInModalVisibility}
      />
      <SignInModal
        isOpen={isSignInModalVisible} 
        setIsOpen={setSignInModalVisibility} 
        openSignUp={setSignUpModalVisibility}
        openPasswordRecovery={setPasswordRecoveryModalVisibility}
      />
      <PasswordRecoveryModal 
        isOpen={isPasswordRecoveryModalVisible}
        setIsOpen={setPasswordRecoveryModalVisibility}
        openSignIn={setSignInModalVisibility}
        openNewPasswordAccepted={setNewPasswordAcceptedModalVisibility}
      />
      <NewPasswordAcceptedModal 
        isOpen={isNewPasswordAcceptedModalVisible}
        setIsOpen={setNewPasswordAcceptedModalVisibility}
        openSignIn={setSignInModalVisibility}
      />
    </>
  )
}
