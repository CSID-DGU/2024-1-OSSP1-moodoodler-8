import React, { useEffect } from 'react';
import useDiaryAnalysis from '../hooks/useDiaryAnalysis';
import useProfile from '../hooks/useProfile';
import comment from '../constants/comment';
import RecommendedMusic from './RecommendedMusic';
import RecommendedBook from './RecommendedBook';
import MoodTagAnalysis from './MoodTagAnalysis';

export default function MoodAnalysis({ isModal, handleDayMoodAnalysisToggle, diary_id }) {
  const {
    mainColor,
    mainColorName,
    analysisResult,
    musicInfo,
    getDiaryAnalysis,
    getRecommendedMusic,
    bookInfo,
    getRecommendedBook,
  } = useDiaryAnalysis(diary_id);
  const { profile, getUserProfile } = useProfile();

  useEffect(() => {
    getUserProfile();
  }, []);

  useEffect(() => {
    getDiaryAnalysis();
    getRecommendedMusic();
    getRecommendedBook();
  }, []);

  return (
    <div className='relative flex flex-col justify-center items-center w-[342px] h-[835px] rounded-[20px] bg-white shadow-componentShadow'>
      {isModal ? (
        <button type='button' onClick={handleDayMoodAnalysisToggle} className='absolute top-[19px] right-[22px]'>
          <img src='/assets/close.svg' alt='닫기' />
        </button>
      ) : (
        ''
      )}
      <div className='flex flex-col items-center gap-[15px]'>
        <MoodTagAnalysis mainColor={mainColor} analysisResult={analysisResult} profile={profile} />
        <div className='h-[32px] text-darkGray text-center text-[13px] whitespace-pre-line'>
          {comment.COMMENT[mainColorName]}
        </div>
        <RecommendedMusic musicInfo={musicInfo} />
        <RecommendedBook bookInfo={bookInfo} />
      </div>
    </div>
  );
}
