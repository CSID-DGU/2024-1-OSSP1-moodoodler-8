import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import useMoodCalendar from '../hooks/useMoodCalendar';

const days = ['일', '월', '화', '수', '목', '금', '토'];

export default function Calendar({ handleColorChipToggle, selectedDate, setSelectedDate, to_user_id, isModified }) {
  const { moodcolorlist } = useMoodCalendar(selectedDate, isModified);
  const [arr, setArr] = useState([]);
  const [moodArr, setMoodArr] = useState([]);

  const handlePrevMonth = (selectedDate) => {
    const newDate = dayjs(selectedDate).subtract(1, 'month').endOf('month').format('YYYY-MM-DD');
    setSelectedDate(newDate);
  };

  const handleNextMonth = (selectedDate) => {
    const newDate = dayjs(selectedDate).add(1, 'month').startOf('month').format('YYYY-MM-DD');
    setSelectedDate(newDate);
  };

  const initArr = (firstDay, daysInMonth) => {
    return Array.from({ length: firstDay + daysInMonth }, (v, i) =>
      i < firstDay
        ? null
        : dayjs(selectedDate)
            .startOf('month')
            .set('date', i - firstDay + 1)
            .format('YYYY-MM-DD')
    );
  };

  const moodColorArr = (firstDay, daysInMonth) => {
    return Array.from({ length: firstDay + daysInMonth }, (v, i) =>
      i < firstDay ? null : moodcolorlist[i - firstDay] || null
    );
  };

  useEffect(() => {
    const firstDay = dayjs(selectedDate).startOf('month').day();
    const daysInMonth = dayjs(selectedDate).daysInMonth();
    localStorage.setItem('selectedDate', selectedDate);
    setArr(initArr(firstDay, daysInMonth));
    setMoodArr(moodColorArr(firstDay, daysInMonth));
  }, [selectedDate, moodcolorlist]);

  return (
    <div className='flex relative justify-center items-center w-[342px] h-[304px] rounded-[20px] shadow-componentShadow'>
      <div className='flex flex-col justify-between items-center w-[290px] h-[260px]'>
        <div className='flex flex-row justify-between items-center w-[283px] h-[18px]'>
          <img
            src='/assets/leftArrow.svg'
            alt='leftArrow'
            className='w-[9px] h-[7px] cursor-pointer'
            onClick={() => handlePrevMonth(selectedDate)}
          />
          <p className='text-[17px] font-semibold text-darkNavy'>
            {dayjs(selectedDate).format('MMM')} {dayjs(selectedDate).format('YYYY')}
          </p>
          <img
            src='/assets/rightArrow.svg'
            alt='rightArrow'
            className='w-[9px] h-[7px] cursor-pointer'
            onClick={() => handleNextMonth(selectedDate)}
          />
        </div>
        <div className='flex flex-col justify-between items-center w-[290px] h-[218px] border-t border-[#E4E5E7]'>
          <div className='flex justify-center w-[290px] pt-[13px] grid grid-cols-7 '>
            {days.map((v) => (
              <div className='font-medium text-[10px] text-center' key={v}>
                {v}
              </div>
            ))}
          </div>
          <div className='w-[290px] h-[171px] grid grid-cols-7 text-center text-[8px] text-darkGreen'>
            {arr.map((v, i) => (
              <div className='flex justify-center' key={v ? v.toString() : `${v}${i}`}>
                {v &&
                  (moodArr[i] !== null ? (
                    dayjs(selectedDate).format('YYYY-MM') <= dayjs().format('YYYY-MM') ? (
                      <div
                        className={`flex justify-center items-center w-[22px] h-[22px] rounded-full bg-[#${moodArr[i]}] text-center cursor-pointer bg-opacity-80`}
                        date={v}
                        onClick={() => setSelectedDate(v)}>
                        {dayjs(v).date()}
                      </div>
                    ) : (
                      <div
                        className='flex justify-center items-center w-[22px] h-[22px] rounded-full bg-gray-scale-1 text-center cursor-pointer'
                        date={v}
                        onClick={() => setSelectedDate(v)}>
                        {dayjs(v).date()}
                      </div>
                    )
                  ) : (
                    <div
                      className='flex justify-center items-center w-[22px] h-[22px] rounded-full bg-gray-scale-1 text-center cursor-pointer'
                      date={v}
                      onClick={() => setSelectedDate(v)}>
                      {dayjs(v).date()}
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <button className='absolute right-[15px] bottom-[15px]' type='button' onClick={handleColorChipToggle}>
        <img src='/assets/more.svg' alt='컬러칩 보기' />
      </button>
    </div>
  );
}
