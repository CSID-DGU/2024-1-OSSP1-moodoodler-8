import React, { useState, useEffect } from 'react';
import Calendar from './Calendar';

export default function FriendCalendar({ to_user, handleColorChipToggle, selectedDate, setSelectedDate }) {
  return (
    <div className='w-[342px] h-[370px] relative'>
      <div className='w-[342px] h-[370px] absolute left-0 top-0 overflow-hidden rounded-[20px] bg-white'>
        <p className='absolute left-[108px] top-[29px] text-base font-semibold text-center text-darkNavy'>
          {to_user.nickname}님의 감정 달력
        </p>
        <img src='./assets/close.svg' className='w-4 h-4 absolute left-[300px] top-[27px] object-contain' />
      </div>
      <Calendar
        handleColorChipToggle={handleColorChipToggle}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        to_user_id={to_user.id}
      />
    </div>
  );
}
