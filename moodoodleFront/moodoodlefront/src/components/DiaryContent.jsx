import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from './CustomButton';

export default function DiaryContent({ content, text, color, handleDayMoodAnalysisToggle }) {
  return (
    <>
      <div className="w-[298px] text-center font-normal text-[13px] text-darkGray">{content}</div>
      <Link to="/main">
        <CustomButton text={text} color={color} onClick={handleDayMoodAnalysisToggle} />
      </Link>
    </>
  );
}
