import { useState } from 'react';
import { defaultAxios } from '../axios/defaultAxios';

export default function useFriendProfile() {
  // 친구 프로필 설정, Map 객체로 초기화
  const [friendList, setFriendList] = useState(new Map());

  // 친구 데이터 받아오기
  const getFriendList = async () => {
    try {
      const getListResponse = await defaultAxios.get('/friend/list/', {
        params: {
          user_id: localStorage.getItem('id'),
        },
      });

      // API 응답에서 'result' 배열 가져오기
      const { result } = getListResponse.data;

      // 배열을 Map으로 변환
      const friendMap = new Map();
      result.forEach((friend) => {
        friendMap.set(friend.nickname, friend);
      });

      // Map 객체 상태로 설정
      setFriendList(friendMap);
    } catch (error) {
      console.error('Error getting profile:', error);
    }
  };

  return { friendList, getFriendList };
}
