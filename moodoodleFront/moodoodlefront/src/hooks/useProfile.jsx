import { useState } from 'react';
import { defaultAxios } from '../axios/defaultAxios';

export default function useProfile() {
  const [profile, setProfile] = useState({
    nickname: '',
    description: '',
    public: false,
  });

  const getUserProfile = async () => {
    try {
      const getProfileResponse = await defaultAxios.get('/user/mypage/', {
        id: localStorage.getItem('id'),
      });
      console.log(getProfileResponse);
      setProfile({
        nickname: getProfileResponse.data.nickname,
        description: getProfileResponse.data.description,
      });
    } catch (error) {
      console.error(error.response.data.status_code);
    }
  };
  return { profile, getUserProfile };
}
