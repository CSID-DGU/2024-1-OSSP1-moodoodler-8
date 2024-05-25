import { useState } from 'react';
import { defaultAxios } from '../axios/defaultAxios';

export default function useProfile() {
  const [profile, setProfile] = useState({
    nickname: '',
    description: '',
    isPublic: false,
  });

  const [isModified, setIsModified] = useState(false);

  const getUserProfile = async () => {
    try {
      const getProfileResponse = await defaultAxios.get(
        `/user/mypage/${localStorage.getItem('id')}/`,
        {
          id: localStorage.getItem('id'),
        },
        {
          withCredentials: true,
        }
      );
      setProfile({
        nickname: getProfileResponse.data.data.nickname,
        description: getProfileResponse.data.data.description,
        isPublic: getProfileResponse.data.data.public,
      });
    } catch (error) {
      console.error(error.response);
    }
  };

  const patchUserProfile = async (handleProfileComponent) => {
    const patchUserInfoData = {
      nickname: profile.nickname,
      description: profile.description,
      public: profile.isPublic,
    };
    try {
      const patchProfileManagementResponse = await defaultAxios.patch(
        `/user/mypage/${localStorage.getItem('id')}/`,
        patchUserInfoData
      );
      handleProfileComponent();
      setIsModified((prev) => !prev);
    } catch (error) {
      console.error(error.response);
    }
  };

  return { profile, setProfile, getUserProfile, patchUserProfile, isModified };
}
