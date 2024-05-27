import { useState } from 'react';
import { defaultAxios } from '../axios/defaultAxios';

export default function useFriendProfile() {
  // 친구 프로필 설정
  const [friendList, setFriendList] = useState([]);

  // 친구 데이터 받아오기
  const getFriendList = async () => {
    try {
      const getListResponse = await defaultAxios.get('/friend/list/', {
        id: localStorage.getItem('id'),
      });

      const result = getListResponse.data;
      console.log(result);

      // Map 객체 상태로 설정
      //if (result.size() == 0) console.log('친구가 없다!');
      //setFriendList(result.map());
    } catch (error) {
      console.error('Error getting profile:', error);
    }
  };

  return { friendList, getFriendList };
}
