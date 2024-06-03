import React from 'react';

export default function LandginLast() {
  return (
    <div
      className='flex flex-col w-full bg-no-repeat bg-bottom items-center h-[400px]'
      style={{
        backgroundImage: `url('/assets/color_bg_vertical.svg')`,
      }}>
      <div className='flex flex-col items-center justify-between w-[280px] h-[135px] mt-[100px]'>
        <p className='text-[22px] text-center font-semibold leading-[25px]'>
          지금 바로 <br /> MOODOODLE을 만나보세요!
        </p>
        <img className='w-[247px] h-[43px]' src='/assets/moodoodleLogo.svg' alt='logo' />
        <a
          href='https://github.com/CSID-DGU/2024-1-OSSP1-moodoodler-8'
          className='flex flex-row h-[18px] items-center border-b border-black'>
          <img src='/assets/link.svg' alt='link' />
          <p className='text-[14px] decoration-none'>Github 바로가기</p>
        </a>
      </div>
    </div>
  );
}
