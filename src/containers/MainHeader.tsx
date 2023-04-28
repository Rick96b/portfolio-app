import React, { useState } from 'react'

import {MainHeader as BaseHeader, NewPasswordAcceptedModal, PasswordRecoveryModal, SignInModal, SignUpModal} from 'components';

export default function MainHeader() {
    const [isSignUpModalVisible, setSignUpModalVisibility] = useState(false)
    const [isSignInModalVisible, setSignInModalVisibility] = useState(false)
    const [isPasswordRecoveryModalVisible, setPasswordRecoveryModalVisibility] = useState(false)
    const [isNewPasswordAcceptedModalVisible, setNewPasswordAcceptedModalVisibility] = useState(false);

    return (
        <>
            <BaseHeader 
                setModalVisibility={setSignUpModalVisibility}
            />
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
