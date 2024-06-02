import React from 'react';
import { Link } from 'react-router-dom';

export default function LandginLast() {
  return (
    <div
      className='flex flex-col w-full bg-no-repeat bg-bottom items-center h-[400px]'
      style={{
        backgroundImage: `url('/assets/color_bg_vertical.svg')`,
      }}>
      <div className='flex flex-col items-center justify-between w-[280px] h-[166px] mt-[100px]'>
        <p className='text-[22px] text-center font-semibold leading-[25px]'>
          지금 바로 <br /> MOODOODLE을 만나보세요!
        </p>
        <img className='w-[247px] h-[43px]' src='/assets/moodoodleLogo.svg' alt='logo' />
        <Link to='/signup'>
          <p className='text-[15px] text-darkGray underline decoration-solid'>회원가입 바로 가기</p>
        </Link>
      </div>
    </div>
  );
}
