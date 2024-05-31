import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import MainProfile from '../components/MainProfile';
import MoodColor from '../components/MoodColor';
import MoodAnalysisModal from '../components/MoodAnalysisModal';
import NavigationBar from '../components/NavigationBar';
import useMoodCalendar from '../hooks/useMoodCalendar';

export default function Home() {
  const location = useLocation();
  const [isCalendar, setIsCalendar] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [isDateClick, setIsDateClick] = useState(false);
  const [isModified, setIsModified] = useState(false);
  const [selectedDate, setSelectedDate] = useState(localStorage.getItem('selectedDate'));
  const date = parseInt(dayjs(selectedDate).format('DD')) - 1;

  function handleColorChipToggle() {
    setIsClick((prev) => !prev);
  }

  function handleDayMoodAnalysisToggle() {
    setIsDateClick((prev) => !prev);
  }

  const handleModified = () => {
    setIsModified((prev) => !prev);
  };

  const { daysDiary } = useMoodCalendar(selectedDate, isModified);

  return (
    <>
      <Header />
      <div className='relative h-full'>
        {location.pathname === '/mypage' ||
        location.pathname === '/friend' ||
        location.pathname === '/alarm' ||
        location.pathname === '/search' ? (
          <div className='h-[12px]' />
        ) : (
          <MainProfile isCalendar={isCalendar} setIsCalendar={setIsCalendar} />
        )}
        {isClick ? <MoodColor handleColorChipToggle={handleColorChipToggle} /> : ''}
        {isDateClick ? (
          <MoodAnalysisModal
            isModal
            handleDayMoodAnalysisToggle={handleDayMoodAnalysisToggle}
            diary_id={daysDiary[date].diary_id}
          />
        ) : (
          ''
        )}
        <Outlet
          context={{
            isCalendar,
            isClick,
            setIsClick,
            handleColorChipToggle,
            handleDayMoodAnalysisToggle,
            selectedDate,
            setSelectedDate,
            daysDiary,
            date,
            isModified,
            setIsModified,
            handleModified,
          }}
        />
      </div>
      <NavigationBar />
    </>
  );
}
