import { useState } from 'react';
import { defaultAxios } from '../axios/defaultAxios';

export default function useProfile() {
  const [profile, setProfile] = useState({
    nickname: '',
    description: '',
    isPublic: false,
    profile_image: '',
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
      console.log(getProfileResponse.data.data);
      if (getProfileResponse.data.data.description === 'null') {
        setProfile({
          nickname: getProfileResponse.data.data.nickname,
          description: null,
          isPublic: getProfileResponse.data.data.public,
          profile_image: getProfileResponse.data.data.profile_image,
        });
      } else {
        setProfile({
          nickname: getProfileResponse.data.data.nickname,
          description: getProfileResponse.data.data.description,
          isPublic: getProfileResponse.data.data.public,
          profile_image: getProfileResponse.data.data.profile_image,
        });
      }
    } catch (error) {
      console.error(error.response);
    }
  };

  const patchUserProfile = async (handleProfileComponent, uploadedImage) => {
    const formData = new FormData();
    if (uploadedImage === undefined) {
      formData.append('id', localStorage.getItem('id'));
      formData.append('nickname', profile.nickname);
      formData.append('description', profile.description);
      formData.append('public', profile.isPublic);
    } else {
      formData.append('id', localStorage.getItem('id'));
      formData.append('nickname', profile.nickname);
      formData.append('description', profile.description);
      formData.append('public', profile.isPublic);
      formData.append('profile_image', uploadedImage);
    }
    console.log(...formData);
    try {
      const patchProfileManagementResponse = await defaultAxios.patch(
        `/user/mypage/${localStorage.getItem('id')}/`,
        formData
      );
      console.log(patchProfileManagementResponse.data);
      handleProfileComponent();
      setIsModified((prev) => !prev);
    } catch (error) {
      console.error(error.response);
    }
  };

  return { profile, setProfile, getUserProfile, patchUserProfile, isModified };
}
