import React, { useEffect } from 'react';
import useProfile from '../hooks/useProfile';

export default function ProfileCol() {
  const {
    profile: { nickname, description, isPublic, profile_image },
    getUserProfile,
  } = useProfile();

  useEffect(() => {
    getUserProfile();
  }, [localStorage.getItem('id')]);

  return (
    <div className='flex w-[342px] h-[273px] justify-center items-center rounded-[20px] bg-white shadow-componentShadow'>
      <div className='flex flex-col h-[215px] justify-between items-center'>
        <p className='font-bold text-base text-darkNavy'>나의 프로필</p>
        <img
          src={`${profile_image}`}
          alt='프로필 사진'
          className='w-[99px] h-[99px] rounded-full shadow-profileImgShadow'
        />
        <div className='flex flex-row gap-[6px] items-center'>
          <p className='text-center text-[16px] font-semibold'>{nickname}</p>
          <img src={`/assets/${isPublic === true ? 'unprivate' : 'private'}.svg`} alt='private' />
        </div>
        <p className='text-center text-[14px] font-light'>{description}</p>
      </div>
    </div>
  );
}
