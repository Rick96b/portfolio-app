import React from 'react'

import { User } from 'Types';
import {default as BasePage} from './Home';


export default function Home() {
  const user: User = 
  {
    name: 'Harassment'
  }

  return (
    <>
      <BasePage user={user}/>
    </>
  )
}
