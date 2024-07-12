import React from 'react';

export default function RecommendedBook() {
  return (
    <div className='flex flex-col h-[241px] justify-between items-center gap-[5px]'>
      <p className='font-bold text-normal text-darkNavy'>오늘의 추천 도서</p>
      <div className='flex flex-col w-[342px] h-[120px] justify-center items-center gap-[20px]'>
        <img className='w-[75px] h-[75px] rounded-full' src={`${musicInfo.music.cover}`} alt='music_cover' />
        <div className='flex flex-row gap-[5px] w-[262px] justify-center tems-center'>
          <p className='font-semibold text-[13px] text-darkGray whitespace-pre-line'>
            오늘도 리추얼 : 음악, 나에게 선물하는 시간
          </p>
          <p className='font-semibold text-[13px] text-darkGray whitespace-pre-line'>
            오늘도 리추얼 : 음악, 나에게 선물하는 시간
          </p>
        </div>
      </div>
    </div>
  );
}
