import { useState } from 'react';
import { defaultAxios } from '../axios/defaultAxios';

export default function useProfile() {
  const [profile, setProfile] = useState({
    nickname: '',
    description: '',
    profile_image: '',
    public: false,
  });

  const getUserProfile = async () => {
    try {
      const getProfileResponse = await defaultAxios.get('/user/mypage', {
        id: localStorage.getItem('id'),
      });
      setProfile({
        nickname: getProfileResponse.data.nickname,
        description: getProfileResponse.data.description,
        profile_image: getProfileResponse.data.profile_image,
      });
    } catch (error) {
      console.error('Error getting profile:');
    }
  };
  return { profile, getUserProfile };
}
