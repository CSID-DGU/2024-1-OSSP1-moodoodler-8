import React, { useEffect } from 'react';
import ToggleContainer from './ToggleContainer';
import useProfile from '../hooks/useProfile';

export default function MainProfile({ isCalendar, setIsCalendar }) {
  const {
    profile: { nickname, description, profile_image },
    getUserProfile,
  } = useProfile();

  useEffect(() => {
    getUserProfile();
  }, [localStorage.getItem('id'), nickname, description, profile_image]);

  return (
    <div className='flex flex-row h-[82px] justify-center items-center'>
      <div className='flex flex-row justify-between items-center w-[330px] h-[48px]'>
        <div className='flex flex-row items-center gap-x-[27px]'>
          <img
            src={`${profile_image ? profile_image : '/assets/profile.svg'}`}
            alt='프로필 사진'
            className='w-[48px] h-[48px] rounded-full shadow-profileImgShadow'
          />
          <div className='flex flex-col h-[36px] justify-between'>
            <div className='font-bold text-sm'>{nickname}</div>
            <div className='font-medium text-xs'>{description}</div>
          </div>
        </div>
        <ToggleContainer isPublic={isCalendar} setIs={setIsCalendar} year />
      </div>
    </div>
  );
}
