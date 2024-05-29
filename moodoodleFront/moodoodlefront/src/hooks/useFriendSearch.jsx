import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { defaultAxios } from '../axios/defaultAxios';

export default function useFriendSearch() {
  const navigate = useNavigate();
  const [friendID, setFriendID] = useState('');
  const [searchData, setSearchData] = useState({});

  const updateFriendID = (event) => {
    const friendID = event.target.value;
    setFriendID(friendID);
  };

  const search = async () => {
    try {
      const getSearchResponse = await defaultAxios.get(`/friend/search/${friendID}/`);
      setSearchData({
        id: getSearchResponse.data.id,
        nickname: getSearchResponse.data.nickname,
        description: getSearchResponse.data.description,
      });
      console.log(getSearchResponse.data);
      navigate('/search', { state: { searchData: getSearchResponse.data } });
    } catch (error) {
      console.log(error.response);
      navigate('/search', { state: { searchData: false } });
    }
  };

  return { friendID, setFriendID, searchData, setSearchData, updateFriendID, search };
}
