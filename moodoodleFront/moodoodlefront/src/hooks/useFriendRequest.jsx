// 친구 추가 보내기
import { useState } from 'react';
import { defaultAxios } from '../axios/defaultAxios';

export default function useFriendRequest() {
  const [hasRequest, setHasRequest] = useState(false);
  const handleRequest = async (to_user_id) => {
    try {
      const addFriendResponse = await defaultAxios.post(`/friend/add/${localStorage.getItem('id')}/${to_user_id}/`, {
        from_user_id: localStorage.getItem('id'),
        to_user_id: to_user_id,
      });
      console.log(addFriendResponse.data);
      console.log('친구 추가 신청 완료');
      setHasRequest(true);
    } catch (error) {
      console.log(error.response.status);
    }
  };

  return { hasRequest, handleRequest };
}
