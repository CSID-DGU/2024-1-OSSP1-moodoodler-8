import { useState } from 'react';
import { defaultAxios } from '../axios/defaultAxios';

export default function useSignup() {
  const [signupInfo, setSignupInfo] = useState({
    id: '',
    password: '',
    nickname: '',
    birthdate: '',
    createDate: '',
  });
  const [isUniqued, setIsUniqued] = useState({
    userId: false,
    nickname: false,
  });
  const postSignupInfo = async () => {
    try {
      const postSignupInfoResponse = await defaultAxios.post('/user/signup/', {
        id: signupInfo.id,
        password: signupInfo.password,
        nickname: signupInfo.nickname,
        created: signupInfo.createDate,
        birthdate: signupInfo.birthdate,
      });
      
    } catch (error) {
      console.error(error.response.data);
    }
  };
  return { postSignupInfo, setSignupInfo };
}
