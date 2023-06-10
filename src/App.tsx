import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import styles from './App.module.scss';
import { Home } from 'pages';
import { MainFooter, MainHeader, SignInModal, SignUpModal, PasswordRecoveryModal, NewPasswordAcceptedModal } from 'components';
import { User } from 'Types';
import Profile from 'pages/Profile';

function App() {
  const [isSignUpModalVisible, setSignUpModalVisibility] = useState(false)
  const [isSignInModalVisible, setSignInModalVisibility] = useState(false)
  const [isPasswordRecoveryModalVisible, setPasswordRecoveryModalVisibility] = useState(false)
  const [isNewPasswordAcceptedModalVisible, setNewPasswordAcceptedModalVisibility] = useState(false);

  const user: User = 
  {
    name: 'Chel'
  }


  return (
  <div className={styles.app}>
    <div className={styles.container}>
      <MainHeader openSignUpModal={setSignUpModalVisibility} user={user}/>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Home setSignUpModalVisibility={setSignUpModalVisibility}/>} />
      </Routes>
      <MainFooter openSignUpModal={setSignUpModalVisibility} user={user}/>
    </div>


    {/*  MODALS */}
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
  </div>
  );
}

export default App;
