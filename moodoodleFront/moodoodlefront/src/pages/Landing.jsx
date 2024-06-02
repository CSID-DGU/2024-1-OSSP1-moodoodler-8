import React from 'react';

export default function Landing() {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <div
        className='flex flex-col justify-center items-center w-full bg-no-repeat bg-top gap-[67px]'
        style={{
          backgroundImage: `url('/assets/color_bg.svg')`,
        }}>
        <div className='flex flex-col w-[260px] h-[150px] justify-between items-center mt-[280px]'>
          <div className='flex flex-col h-[67px] items-center'>
            <img src='/assets/moodoodleLogoMain.svg' alt='logo' />
            <div className='text-[15px] font-semibold'>
              : <span className='text-pink'>MOOD</span> + <span className='text-purple'>DOODLE</span>
            </div>
          </div>
          <div className='w-[197px] text-center text-darkGray text-[11px] leading-[15px] whitespace-pre-line'>
            저희 <b>MOODOODLE</b> 서비스는 <br /> 여러분의 일기를 분석해줌으로써 <br />
            여러분들이 몰랐던 감정에 대해 알려주고 <br />
            그에 맞는 음악을 추천해주는 서비스입니다.
          </div>
        </div>
        <div className='flex flex-col w-[329px] h-[115px] items-center'>
          <p className='text-[14px] font-bold leading-[15px]'>MOODOODLE COLOR CHIP</p>
          <p className='text-[11px] font-medium leading-[15px] text-darkGray'>
            MOODOOELE이 분석하는 7가지의 감정을 소개합니다!
          </p>
          <img src='/assets/color_chip.svg' alt='colorchip' />
        </div>
        <img src='/assets/tutorial.svg' alt='tutorial' />
      </div>
    </div>
  );
}
