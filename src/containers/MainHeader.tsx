import React from 'react'

import {MainHeader as BaseHeader} from 'components';
import { User } from 'Types';

interface MainHeaderProps {
    user: User,
    openSignUpModal: Function
}


export default function MainHeader({
    openSignUpModal,
    user
}: MainHeaderProps) {


    return (
        <BaseHeader 
            openSignUpModal={openSignUpModal}
            user={user}
        />
    )
}
