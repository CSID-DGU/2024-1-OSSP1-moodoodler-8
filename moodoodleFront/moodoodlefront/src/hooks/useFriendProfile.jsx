import { useState } from 'react';
import { defaultAxios } from '../axios/defaultAxios';

export default function useFriendProfile() {
  // 친구 프로필 설정
  const [friendList, setFriendList] = useState([]);
  const [hasFriend, setHasFriend] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  // 친구 데이터 받아오기
  const getFriendList = async () => {
    try {
      const getListResponse = await defaultAxios.get(`/friend/list/${localStorage.getItem('id')}/`, {
        params: {
          user_id: localStorage.getItem('id'),
        },
      });

      // API 응답에서 'result' 배열 가져오기
      const { result } = getListResponse.data;

      // 배열을 Map으로 변환
      const friendMap = new Map();
      result.forEach((friend) => {
        friendMap.set(friend.id, friend);
      });
      // Map 객체 상태로 설정
      setFriendList(friendMap);
      setHasFriend(friendMap.size > 0);
    } catch (error) {
      console.error('Error getting profile:', error);
    }
  };
  // 친구 데이터 삭제하기
  const handleDeleteFriend = async (to_user_id) => {
    const deleteReqest = {
      from_user_id: localStorage.getItem('id'),
      to_user_id: to_user_id,
    };
    try {
      const deleteFriendResponse = await defaultAxios.delete(
        `/friend/delete/${localStorage.getItem('id')}/${to_user_id}/`,
        deleteReqest
      );
      getFriendList();
    } catch (error) {
      console.error('Error getting calendar:', error);
    }
  };

  return { friendList, getFriendList, hasFriend, setHasFriend, isDelete, setIsDelete, handleDeleteFriend };
}
