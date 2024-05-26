import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { defaultAxios } from '../axios/defaultAxios';

export default function useFriendSearch() {
  const navigate = useNavigate();
  const [friendID, setFriendID] = useState();
  const [searchData, setSearchData] = useState({ id: '' });

  const search = async (body) => {
    try {
      const getSearchResponse = await defaultAxios.get(`/friend/search/${friendID}`, {
        id: localStorage.getItem('id'),
      });
      setSearchData({
        id: getSearchResponse.data.id,
        nickname: getSearchResponse.data.nickname,
        profile_image: getSearchResponse.data.profile_image,
        description: getSearchResponse.data.description,
      });
      navigate('/search');
    } catch (error) {
      console.log(error.response);
    } finally {
    }
  };
  return { friendID, setFriendID, searchData, setSearchData, search };
}
