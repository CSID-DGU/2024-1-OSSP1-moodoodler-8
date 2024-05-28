import { useState } from 'react';
import { defaultAxios } from '../axios/defaultAxios';

export default function useFriendProfile() {
  // 친구 프로필 설정
  const [friendList, setFriendList] = useState([]);
  const [friendCalemdar, setFriendCalendar] = useState();
  const [hasFriend, setHasFriend] = useState(false);

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
        console.log(friendMap);
      });
      // Map 객체 상태로 설정
      setFriendList(friendMap);
      setHasFriend(friendMap.size > 0);
    } catch (error) {
      console.error('Error getting profile:', error);
    }
  };

  // 친구 달력 받아오기
  const getFriendCalendar = async ({ to_user_id, year, month }) => {
    try {
      const getFriendCalendarResponse = await defaultAxios.get(
        `/friend/calendar/${localStorage.getItem('id')}/${to_user_id}/${year}/${month}/`,
        {
          from_user_id: localStorage.getItem('id'),
          to_user_id: to_user_id,
        }
      );

      const result = getFriendCalendarResponse.data;
      console.log(result);
    } catch (error) {
      console.error('Error getting calendar:', error);
    }
  };

  return { friendList, getFriendList, hasFriend };
}
