import { useState } from 'react';
import axios from 'axios';

export default function useFriendProfile() {
  const [profile, setFriendProfile] = useState({
    nickname: '칭구 무두들러',
    description: '안녕하세요. 무두들러 친구입니다!',
    profile_image: '/assets/profile.svg',
    public: false,
  });

  const getFriendProfile = async (body) => {
    try {
      const userProfileResponse = await axios.get('/friend/list', body);
      setFriendProfile({
        nickname: userProfileResponse.nickname,
        description: userProfileResponse.description,
        profile_image: userProfileResponse.profile_image,
      });
    } catch (error) {
      const { message } = error.response.data;
      console.log(message);
    }
  };
  return { profile, getFriendProfile };
}
