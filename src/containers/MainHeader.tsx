import React, { useState } from 'react'

import {MainHeader as BaseHeader} from 'components';

interface MainHeaderProps {
    openSignUpModal: Function
}

export default function MainHeader({
    openSignUpModal
}: MainHeaderProps) {

    return (
        <BaseHeader 
            openSignUpModal={openSignUpModal}
        />
    )
}
