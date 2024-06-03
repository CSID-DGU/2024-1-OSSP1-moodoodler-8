import React from 'react';

export default function FriendProfile({ nickname, description, img, src1, alt1, onClick1, src2, alt2, onClick2 }) {
  if (!img) img = './assets/profile.svg';
  return (
    <div className='flex justify-around items-center w-[312px] h-[67px] rounded-[10px] bg-white border-[0.47px] border-darkGray/10 shadow-componentShadow'>
      <div className='flex items-center gap-[10px]'>
        <img src={`${img}`} alt='프로필 사진' className='w-[48px] h-[48px] rounded-full shadow-profileImgShadow' />
        <div className='w-[140px] items-center'>
          <p className='text-[12px] font-bold text-left text-black'>{nickname}</p>
          {description === null ? (
            <p className='text-[10px] font-medium text-left text-black'>&nbsp;</p>
          ) : (
            <p className='text-[10px] font-medium text-left text-black'>{description}</p>
          )}
        </div>
      </div>
      <button type='button' onClick={onClick1}>
        <img src={src1} alt={alt1} />
      </button>
      <button type='button' onClick={onClick2}>
        <img src={src2} alt={alt2} />
      </button>
    </div>
  );
}
