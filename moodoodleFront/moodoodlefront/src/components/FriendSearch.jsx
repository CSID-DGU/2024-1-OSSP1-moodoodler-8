import React, { useEffect } from 'react';
import FriendProfile from '../components/FriendProfile';
import { useLocation } from 'react-router-dom';
import useFriendRequest from '../hooks/useFriendRequest';
import useFriendSearch from '../hooks/useFriendSearch';

export default function FriendSearch() {
  const location = useLocation();
  const { searchData } = location.state || {};
  const { hasRequest, handleRequest } = useFriendRequest();
  const { setSearchData } = useFriendSearch();

  useEffect(() => {
    setSearchData();
  }, []);

  return (
    <div className='flex flex-col items-center w-[342px] h-[619px] relative gap-[20px] rounded-[20px] bg-white shadow-componentShadow'>
      <div className='flex justify-between w-[300px] h-[40px]'>
        <p className='self-end font-bold text-center text-darkNavy w-full'>검색 결과</p>
      </div>
      {searchData ? (
        <div className='flex flex-col gap-[5px]'>
          <FriendProfile
            key={searchData.id}
            nickname={searchData.nickname}
            description={searchData.description}
            img={searchData.profile_image}
            src2={hasRequest ? '/assets/friendresp.svg' : '/assets/friendreq.svg'}
            alt2='friendrequest'
            onClick2={() => handleRequest(searchData.id)}
          />
        </div>
      ) : (
        <p className='text-sm font-semibold text-center text-darkgray'>검색 결과가 없습니다.</p>
      )}
    </div>
  );
}
