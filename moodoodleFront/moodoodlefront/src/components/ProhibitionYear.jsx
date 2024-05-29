import React from 'react';

export default function ProhibitionYear() {
  return (
    <div className='flex flex-col h-[480px] items-center justify-center'>
      <div className='flex flex-col justify-center items-center w-[342px] h-[159px] bg-white gap-[6px]'>
        <img src='/assets/warning.svg' alt='경고' />
        <p className='font-bold text-base text-center text-darkNavy'>
          미래 연력은 조회할 수 없습니다. <br />
          다른 연도로 이동해주세요!
        </p>
      </div>
    </div>
  );
}
