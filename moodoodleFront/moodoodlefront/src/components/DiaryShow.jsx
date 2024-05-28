import React from 'react';
import dayjs from 'dayjs';
import DiaryContent from './DiaryContent';
import DiaryModifiedComponent from './DiaryModifiedComponent';
import useDiaryWrite from '../hooks/useDiaryWrite';

export default function DiaryShow({
  content,
  diary_id,
  selectedDate,
  text,
  color,
  handleDayMoodAnalysisToggle,
  handleModified,
  isModified,
}) {
  const { handleDeleteDiary } = useDiaryWrite();
  return (
    <div className='relative flex justify-center items-center w-[342px] h-[300px] rounded-[20px] bg-white shadow-componentShadow'>
      <div className='flex flex-col justify-between items-center w-[175px] h-[250px]'>
        <div className='flex flex-col h-[46px] justify-between items-center'>
          <p className='font-bold text-base text-darkNavy'>나의 감정 일기</p>
          <p className='font-medium text-sm text-darkGray'>
            {dayjs(selectedDate).format('MMM')}. {dayjs(selectedDate).format('DD')},{' '}
            {dayjs(selectedDate).format('YYYY')}
          </p>
        </div>
        {isModified ? (
          <DiaryModifiedComponent
            selectedDate={selectedDate}
            content={content}
            diary_id={diary_id}
            handleModified={handleModified}
          />
        ) : (
          <DiaryContent
            diary_id={diary_id}
            content={content}
            text={text}
            color={color}
            handleDayMoodAnalysisToggle={handleDayMoodAnalysisToggle}
          />
        )}
        {isModified ? (
          <button
            onClick={() => {
              handleDeleteDiary({ diary_id, handleModified });
            }}>
            <img src='/assets/trash.svg' alt='삭제하기' className='absolute top-[29px] right-[29px]' />
          </button>
        ) : (
          <button onClick={handleModified}>
            <img src='/assets/modified.svg' alt='수정하기' className='absolute top-[29px] right-[29px]' />
          </button>
        )}
      </div>
    </div>
  );
}
