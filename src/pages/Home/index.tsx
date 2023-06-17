import React, { useState } from 'react'

import {default as BasePage} from './Home';
import axios from 'axios';


interface HomeProps {
  setSignUpModalVisibility: Function,
  setAddProjectModalVisibility: Function,
}

export default function Home({
  setSignUpModalVisibility,
  setAddProjectModalVisibility
}: HomeProps) {
  const [projects, setProjects] = useState(null)
  const [initialized, setInitialized] = useState(false);

  async function getProjects(count: number) {
    try {
      // 👇️ const data: GetUsersResponse
      const { data, status } = await axios.get(
        'http://localhost:5000/api/Project/feed',
        {
          params: {
            count: count
          }
        },
      );

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        return null;
      } else {
        console.log('unexpected error: ', error);
        return null;
      }
    }
  } 

  if(!initialized) {
    getProjects(10).then(data => setProjects(data));
    setInitialized(true);
  }


  return (
    <>
      <BasePage setSignUpModalVisibility={setSignUpModalVisibility}
       setAddProjectModalVisibility={setAddProjectModalVisibility} 
       projects={projects}/>
    </>
  )
}
