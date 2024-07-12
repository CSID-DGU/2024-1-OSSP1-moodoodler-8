import React from 'react';

export default function RecommendedBook() {
  return (
    <div className='flex flex-col h-[241px] justify-between items-center'>
      <p className='font-bold text-normal text-darkNavy'>오늘의 추천 도서</p>
      <img src='' className='h-[134px]' />
      <div className='flex flex-col justify-between items-center gap-[5px]'>
        <p className='font-semibold text-[14px] text-darkGray leading-[-5px]'>
          오늘도 리추얼 : 음악, 나에게 선물하는 시간
        </p>
        <p className='font-medium text-[12px] text-darkGray leading-[-5px]'>정혜윤 (지은이)</p>
      </div>
    </div>
  );
}
