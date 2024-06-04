import React, { useState, useEffect } from 'react';
import Calendar from './Calendar';

export default function FriendCalendar({ to_user, handleColorChipToggle, handleShowCalendar }) {
  const [selectedDate, setSelectedDate] = useState();
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const formattedDate = `${year}-${month}`;

  useEffect(() => {
    setSelectedDate(formattedDate);
  }, []);

  const style = {
    transform: 'scale(0.9)',
    transformOrigin: 'center', // 크기 조절 기준점을 중심으로 설정
    width: '100%',
    height: '100%',
  };
  return (
    <div className='fixed inset-0 top-0 flex w-full h-full justify-center items-center z-20 bg-outlineGray bg-opacity-50'>
      <div className='flex flex-col items-center w-[342px] h-[370px] relative rounded-[20px] gap-[10px] bg-white'>
        <div className='flex justify-between w-[280px] h-[80px]'>
          <p className='self-end w-full font-extrabold text-center text-darkNavy'>{to_user.nickname}님의 감정 달력</p>
          <button className='self-end cursor-pointer' type='button' onClick={handleShowCalendar}>
            <img src='/assets/close.svg' alt='닫기' />
          </button>
        </div>
        <div style={style}>
          <Calendar
            handleColorChipToggle={handleColorChipToggle}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            to_user_id={to_user.id}
          />
        </div>
      </div>
    </div>
  );
}
