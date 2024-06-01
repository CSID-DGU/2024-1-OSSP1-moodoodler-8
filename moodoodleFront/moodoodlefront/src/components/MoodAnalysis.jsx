import React, { useEffect } from 'react';
import MoodHashTag from './MoodHashTag';
import useDiaryAnalysis from '../hooks/useDiaryAnalysis';
import useProfile from '../hooks/useProfile';
import comment from '../constants/comment';
import IMG_URL from '../constants/ImgUrl';

const colorVariants = {
  DBD3FB: 'text-[#DBD3FB]',
  FEF4A0: 'text-[#FEF4A0]',
  FF9191: 'text-[#FF9191]',
  B5D3FF: 'text-[#B5D3FF]',
  B3F4B2: 'text-[#B3F4B2]',
  FBCFE0: 'text-[#FBCFE0]',
  FECFAD: 'text-[#FECFAD]',
};

export default function MoodAnalysis({ isModal, handleDayMoodAnalysisToggle, diary_id }) {
  const { mainColor, mainColorName, analysisResult, musicInfo, getDiaryAnalysis, getRecommendedMusic } =
    useDiaryAnalysis(diary_id);
  const { profile, getUserProfile } = useProfile();

  useEffect(() => {
    getUserProfile();
  }, [profile]);

  useEffect(() => {
    getDiaryAnalysis();
    getRecommendedMusic();
  }, []);

  return (
    <div className='relative flex flex-col justify-center items-center w-[342px] h-[531px] rounded-[20px] bg-white shadow-componentShadow'>
      <div className='flex flex-col h-[460px] justify-between items-center'>
        <div className='flex flex-col h-[200px] justify-between items-center'>
          <p className='font-bold text-normal text-darkNavy'>감정 태그</p>
          <div className='flex flex-col h-[120px] justify-between items-center'>
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
                    <p className={`text-semibold ${colorVariants[result.mood_color]}`}>[{result.mood_name}]</p>이(가)
                    &nbsp;
                    <span>{result.ratio}%</span>
                    &nbsp;
                  </div>
                ))}
                예요!
              </div>
            </div>
          </div>
          <div className=''>
            <div className='flex flex-row flex-wrap justify-center items-center gap-[25px]'>
              {analysisResult.map((result, v) =>
                v < 3 ? <MoodHashTag key={v} mood_title={result.mood_name} mood_color={result.mood_color} /> : ''
              )}
            </div>
          </div>
        </div>
        <div className='h-[32px] text-darkGray text-center text-[13px] whitespace-pre-line'>
          {comment.COMMENT[mainColorName]}
        </div>
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
      {isModal ? (
        <button type='button' onClick={handleDayMoodAnalysisToggle} className='absolute top-[19px] right-[22px]'>
          <img src='/assets/close.svg' alt='닫기' />
        </button>
      ) : (
        ''
      )}
    </div>
  );
}
