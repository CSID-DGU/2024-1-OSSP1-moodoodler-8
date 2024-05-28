import React from 'react';
import dayjs from 'dayjs';
import CustomButton from './CustomButton';
import { useNavigate } from 'react-router-dom';

export default function DiaryShowInAnalysis({ selectedDate, content, text, color }) {
  const navigate = useNavigate();
  return (
    <div className="relative flex justify-center items-center w-[342px] h-[300px] rounded-[20px] bg-white shadow-componentShadow">
      <div className="flex flex-col justify-between items-center w-[175px] h-[250px]">
        <div className="flex flex-col h-[46px] justify-between items-center">
          <p className="font-bold text-base text-darkNavy">나의 감정 일기</p>
          <p className="font-medium text-sm text-darkGray">
            {dayjs(selectedDate).format('MMM')}. {dayjs(selectedDate).format('DD')},{' '}
            {dayjs(selectedDate).format('YYYY')}
          </p>
        </div>
        <div className="w-[298px] text-center font-normal text-[13px] text-darkGray">{content}</div>
        <CustomButton text={text} color={color} onClick={() => navigate('/main')} />
      </div>
    </div>
  );
}
