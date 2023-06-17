import React, {useEffect, useState} from 'react';

import {default as BasePage} from './Profile';
import axios from 'axios';
import { userData } from 'Types';
import { userStore } from 'store';
import { Loader } from 'components';


const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get<userData>("http://localhost:5000/api/users/id/" + userStore.currentUser.id)
      .catch(error => console.log(error))
      if(data) setUserData(data.data);
    };
    getData();
  }, []);

  console.log(userData)

  if(userData===null) return <Loader />

  return (
    <BasePage userData={userData}/>
  )
}

export default Profile;