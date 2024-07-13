import React from 'react';

export default function RecommendedMusic({ musicInfo }) {
  return (
    <div>
      <div className='flex flex-col h-[186px] justify-between items-center gap-[5px]'>
        <p className='font-bold text-normal text-darkNavy'>오늘의 추천 음악</p>
        <div className='flex flex-col w-[342px] h-[120px] justify-center items-center gap-[20px]'>
          <img className='w-[75px] h-[75px] rounded-full' src={`${musicInfo.music.cover}`} alt='music_cover' />
          <div className='flex flex-row gap-[5px] w-[262px] justify-center items-center'>
            <img src='/assets/music.svg' alt='music' />
            <p className='font-semibold text-[13px] text-darkGray whitespace-pre-line'>
              {musicInfo.music.title} - {musicInfo.music.artist}
            </p>
          </div>
        </div>
        <p className='text-darkGray text-center text-[12px] whitespace-pre-line'>
          당신의 감정과 <b>{parseFloat(musicInfo.similarity * 100).toFixed(2)}%</b> 일치하는 음악입니다!
        </p>
      </div>
    </div>
  );
}
