import React from 'react';
import MoodAnalysis from '../components/MoodAnalysis';
import DiaryShowInAnalysis from '../components/DiaryShowInAnalysis';

export default function AnalysisPage() {
  return (
    <div className='flex flex-col justify-between items-center gap-[15px]'>
      <MoodAnalysis diary_id={localStorage.getItem('diary_id')} />
      <DiaryShowInAnalysis
        content={localStorage.getItem('content')}
        selectedDate={localStorage.getItem('selectedDate')}
        text='메인으로'
        color='skyblue'
      />
    </div>
  );
}
