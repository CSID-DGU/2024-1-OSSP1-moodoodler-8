import React, { useEffect } from 'react';
import useFriendProfile from '../hooks/useFriendProfile';

export default function FriendProfile({}) {
  const { profile, getFriendProfile } = useFriendProfile();

  useEffect(() => {
    getFriendProfile();
  }, [localStorage.getItem('user_id')]);

  return (
    <div className='flex justify-around items-center w-[312px] h-[67.87px] rounded-[9.43px] bg-white border-[0.47px] border-darkGray/10 shadow-loginShadow'>
      <div className='flex items-center gap-[10px]'>
        <img
          src={`${profile.profile_image}`}
          alt='프로필 사진'
          className='rounded-full'
        />
        <div className='w-[160px] items-center'>
          <p className='text-[12px] font-bold text-left text-black'>
            {profile.nickname}
          </p>
          <p className='text-[10px] font-medium text-left text-black'>
            {profile.description}
          </p>
        </div>
      </div>
      <button className=''>
        <img src='/assets/calendar.svg' alt='calendar' />
      </button>
    </div>
  );
}
