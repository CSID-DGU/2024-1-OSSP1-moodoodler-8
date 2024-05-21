import React, { useState } from 'react';
import useFriendProfile from '../hooks/useFriendProfile';
import FriendProfile from '../components/FriendProfile';

export default function Alarm() {
  // 친구 신청 리스트의 갯수를 세기 위해 선언, 기본값 0
  const [lastIdx, setLastIdx] = useState(0);
  return (
    <div className='flex flex-col justify-center items-center gap-[30px]  rounded-[20px] bg-white shadow-componentShadow'>
      <div className='flex flex-col items-center w-[342px] h-[619px] relative gap-[20px]'>
        <div className='flex justify-between w-[300px] h-[40px]'>
          <p className='self-end font-bold text-center text-darkNavy w-full'>
            친구 신청
          </p>
          <button className='self-end'>
            <img src='/assets/moreline.svg' alt='more' />
          </button>
        </div>
        <div className='flex flex-col gap-[5px]'>
          <FriendProfile src2='/assets/calendar.svg' alt2='calendar' />
        </div>
      </div>
    </div>
  );
}
