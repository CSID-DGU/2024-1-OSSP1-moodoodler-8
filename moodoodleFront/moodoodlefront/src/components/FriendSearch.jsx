import React, { useState } from 'react';
import FriendProfile from '../components/FriendProfile';
import useFriendSearch from '../hooks/useFriendSearch';

export default function FriendSearch() {
  const { searchData, setSearchData, search } = useFriendSearch();
  return (
    <div className='flex flex-col items-center w-[342px] h-[619px] relative gap-[20px] rounded-[20px] bg-white shadow-componentShadow'>
      <div className='flex justify-between w-[300px] h-[40px]'>
        <p className='self-end font-bold text-center text-darkNavy w-full'>검색 결과</p>
        {/* 해당 버튼을 누르면 삭제 기능으로 이동하게 설정 */}
        <button className='self-end'>
          <img src='/assets/moreline.svg' alt='more' />
        </button>
      </div>
      <div className='flex flex-col gap-[5px]'>
        {/* 친구 존재하면 표시, 아니라면 결과 없음 표시로 변경 */}
        <FriendProfile
          key={searchData.id}
          img={searchData.profile_image}
          nickname={searchData.nickname}
          description={searchData.description}
          src2='/assets/friendreq.svg'
          alt2='friendrequest'
          onClick2=''
        />
      </div>
    </div>
  );
}
