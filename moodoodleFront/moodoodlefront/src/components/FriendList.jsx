import React, { useState } from 'react';
import useFriendProfile from '../hooks/useFriendProfile';
import FriendProfile from '../components/FriendProfile';

export default function FriendList() {
  const { Friendprofile, getFriendProfile } = useFriendProfile();

  useEffect(() => {
    getUserProfile();
  }, [localStorage.getItem('user_id')]);

  return (
    <div className='flex flex-col items-center w-[342px] h-[619px] relative gap-[20px] rounded-[20px] bg-white shadow-componentShadow'>
      <div className='flex justify-between w-[300px] h-[40px]'>
        <p className='self-end font-bold text-center text-darkNavy w-full'>
          친구 목록
        </p>
        {/* 해당 버튼을 누르면 삭제 기능으로 이동하게 설정 */}
        <button className='self-end'>
          <img src='/assets/moreline.svg' alt='more' />
        </button>
      </div>
      {/* img를 클릭했을 때 달력을 띄우기 위한 코드 구성 
      서버로 친구들 목록 받아오는 것도 생각해야함*/}
      <div className='flex flex-col gap-[5px]'>
        <FriendProfile src2='/assets/calendar.svg' alt2='calendar' />
      </div>
    </div>
  );
}
