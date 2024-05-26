import React from 'react';
import MoodAnalysis from './MoodAnalysis';

export default function MoodAnalysisModal({ isModal, handleDayMoodAnalysisToggle, diary_id }) {
  return (
    <div className="absolute top-0 flex w-full h-full justify-center items-center z-50 bg-outlineGray bg-opacity-50">
      <MoodAnalysis isModal handleDayMoodAnalysisToggle={handleDayMoodAnalysisToggle} diary_id={diary_id} />
    </div>
  );
}
