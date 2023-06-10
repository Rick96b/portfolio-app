import React from 'react'

import {default as BasePage} from './Home';


interface HomeProps {
  setSignUpModalVisibility: Function,
}

export default function Home({
  setSignUpModalVisibility
}: HomeProps) {

  return (
    <>
      <BasePage setSignUpModalVisibility={setSignUpModalVisibility}/>
    </>
  )
}
