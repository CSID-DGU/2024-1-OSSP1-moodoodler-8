import React from 'react';
import Calendar from './Calendar';

export default function FriendCalendar({
  to_user,
  handleColorChipToggle,
  selectedDate,
  setSelectedDate,
  handleShowCalendar,
}) {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='flex flex-col items-center w-[342px] h-[370px] relative rounded-[20px] bg-white'>
        <div className='flex justify-between w-[300px] h-[40px]'>
          <p className='self-end w-full font-bold text-center text-darkNavy'>{to_user.nickname}님의 감정 달력</p>
          <button className='self-end cursor-pointer' type='button' onClick={handleShowCalendar}>
            <img src='/assets/close.svg' alt='닫기' />
          </button>
        </div>
        <Calendar
          handleColorChipToggle={handleColorChipToggle}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          to_user_id={to_user.id}
        />
      </div>
    </div>
  );
}
