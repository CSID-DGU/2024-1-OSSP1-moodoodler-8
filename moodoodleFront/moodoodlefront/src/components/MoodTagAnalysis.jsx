import React from 'react';
import MoodHashTag from './MoodHashTag';

const colorVariants = {
  DBD3FB: 'text-[#DBD3FB]',
  FEF4A0: 'text-[#FEF4A0]',
  FF9191: 'text-[#FF9191]',
  B5D3FF: 'text-[#B5D3FF]',
  B3F4B2: 'text-[#B3F4B2]',
  FBCFE0: 'text-[#FBCFE0]',
  FECFAD: 'text-[#FECFAD]',
};

export default function MoodTagAnalysis({ mainColor, analysisResult, profile }) {
  return (
    <div className='flex flex-col h-[220px] justify-between items-center mt-[33px]'>
      <p className='font-bold text-normal text-darkNavy'>감정 태그</p>
      <div className='flex flex-col items-center gap-[5px]'>
        <div className='w-[50px] h-[50px]'>
          <div className={`w-[50px] h-[50px] rounded-full bg-[#${mainColor}]`} />
        </div>
        <div className='flex flex-col w-[262px] justify-center items-center'>
          <div className='flex flex-row text-darkGray text-center text-[13px] whitespace-pre-line'>
            [{profile.nickname}]님의 오늘 느낀 감정은
          </div>
          <div className='flex flex-row w-[230px] justify-center flex-wrap whitespace-pre-wrap text-darkGray text-center text-[13px]'>
            {analysisResult.map((result, v) => (
              <div className='flex flex-row text-darkGray text-center text-[13px] whitespace-pre-wrap' key={v}>
                <p className={`text-semibold ${colorVariants[result.mood_color]}`}>[{result.mood_name}]</p>이(가) &nbsp;
                <span>{result.ratio}%</span>
                &nbsp;
              </div>
            ))}
            예요!
          </div>
        </div>
      </div>
      <div>
        <div className='flex flex-row flex-wrap justify-center items-center gap-[25px]'>
          {analysisResult.map((result, v) =>
            v < 3 ? <MoodHashTag key={v} mood_title={result.mood_name} mood_color={result.mood_color} /> : ''
          )}
        </div>
      </div>
    </div>
  );
}
