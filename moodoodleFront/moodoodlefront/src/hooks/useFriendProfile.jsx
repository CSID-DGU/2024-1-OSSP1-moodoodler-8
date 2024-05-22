import { useState } from 'react';
import axios from 'axios';

export default function useFriendProfile() {
  // 친구 프로필 설정, 리스트 값이므로 대괄호 추가
  const [friendProfile, setFriendProfile] = useState([
    {
      nickname: '무두들러 칭구',
      profile_image: '/assets/profile.svg',
      description: '안녕하세요. 무두들러 친구입니다!',
      public: false,
    },
  ]);
  // 친구 리스트의 갯수를 세기 위해 선언, 기본값 0
  const [lastIdx, setLastIdx] = useState(0);
  // 친구 데이터 받아오기
  const getFriendProfile = async (body) => {
    try {
      const userProfileResponse = await axios.get('/friend/list', body);
      setFriendProfile({
        nickname: userProfileResponse.nickname,
        profile_image: userProfileResponse.profile_image,
        description: userProfileResponse.description,
      });
    } catch (error) {
      const { message } = error.response.data;
      console.log(message);
    }
  };
  return { profile: friendProfile, getFriendProfile };
}
