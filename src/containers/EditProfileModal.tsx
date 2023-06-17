import React from 'react'
import { EditProfileModal as BaseModal} from 'components'
import axios from 'axios';
import { userStore } from 'store';

interface EditProfileModalProps {
    isOpen: boolean,
    setIsOpen: Function,
    setPasswordModalOpen: Function
}

const EditProfileModal:React.FC<EditProfileModalProps> = ({isOpen, setIsOpen, setPasswordModalOpen}) => {
    const submitFunction = async (values: any) => {
        try {
          // 👇️ const data: GetUsersResponse
          await axios.post(
            'http://localhost:5000/api/User/update',
            {
                email: values.email,
                name: values.name,
                vkLink: values.vkLink,
                telegramLink: values.telegramLink,
                description: values.description,
                photo: values.photo
            },
          );    
        } catch (error) {
          if (axios.isAxiosError(error)) {
            console.log(error);
            return error.message;
          } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
          }
        }
      };

    return (
        <BaseModal isOpen={isOpen} setIsOpen={setIsOpen} submitFunction={submitFunction} setPasswordModalOpen={setPasswordModalOpen}/>
    )
}

export default EditProfileModal