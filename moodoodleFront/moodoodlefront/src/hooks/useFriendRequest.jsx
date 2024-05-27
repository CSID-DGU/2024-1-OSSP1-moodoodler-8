// 친구 추가 보내기
import { useState } from 'react';
import { defaultAxios } from '../axios/defaultAxios';
import { useNavigate } from 'react-router-dom';

export default function useFriendRequest() {
  const navigate = useNavigate();
  const [addFriendID, setAddFriendID] = useState('');
  const handleRequest = async (to_user_id) => {
    try {
      console.log(addFriendID);
      const addFriendResponse = await defaultAxios.post(`/friend/add/${to_user_id}/`, {
        to_user_id: to_user_id,
        from_user_id: localStorage.getItem('id'),
      });
      console.log(addFriendResponse.data);
      navigate('/friend/list/');
    } catch (error) {
      console.log(error.response.status);
    }
  };
  return { addFriendID, setAddFriendID, handleRequest };
}
