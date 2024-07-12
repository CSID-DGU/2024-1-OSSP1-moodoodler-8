import React from 'react';

export default function RecommendedBook() {
  return (
    <div className='flex flex-col h-[295px] justify-between items-center'>
      <p className='font-bold text-normal text-darkNavy'>오늘의 추천 도서</p>
      <img src='' className='h-[134px]' />
      <div className='flex flex-col justify-between items-center gap-[5px]'>
        <p className='font-semibold text-[14px] text-darkGray leading-[-5px]'>
          오늘도 리추얼 : 음악, 나에게 선물하는 시간
        </p>
        <p className='font-medium text-[12px] text-darkGray leading-[-5px]'>정혜윤 (지은이)</p>
      </div>
      <p className='w-[299px] text-[12px] text-center font-medium text-darkGray'>
        평범한 어른이의 소소한 일상 이야기들과 끄적끄적 생각들을 모은 에세이집으로 누구나 가볍게 읽을 수 있는 이 책은
        어떠세요?
      </p>
    </div>
  );
}
