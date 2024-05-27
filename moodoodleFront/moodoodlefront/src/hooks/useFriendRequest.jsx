// 친구 요청
import { useState } from 'react';
import { defaultAxios } from '../axios/defaultAxios';

export default function useFriendRequest() {
  // 친구 요청 리스트 설정, Map 객체로 초기화
  const [friendreqList, setFriendReqList] = useState(new Map());

  // 친구 데이터 받아오기
  const getFriendReqList = async () => {
    try {
      const getListResponse = await defaultAxios.get('/friend/request/', {
        params: {
          user_id: localStorage.getItem('id'),
        },
      });

      // API 응답에서 'result' 배열 가져오기
      const { result } = getListResponse.data;

      // 배열을 Map으로 변환
      const friendreqMap = new Map();
      result.forEach((friend) => {
        friendreqMap.set(friend.id, friend);
      });

      // Map 객체 상태로 설정
      setFriendReqList(friendreqMap);
    } catch (error) {
      console.error('Error getting profile:', error);
    }
  };

  return { friendreqList, getFriendReqList };
}
