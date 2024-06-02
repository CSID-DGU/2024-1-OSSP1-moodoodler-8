import React from 'react';
import dayjs from 'dayjs';
import { useOutletContext } from 'react-router-dom';
import DiaryWritePopup from '../components/DiaryWritePopup';
import Calendar from '../components/Calendar';
import DiaryShow from '../components/DiaryShow';
import YearCalendar from '../components/YearCalendar';
import ProhibitionComponent from '../components/ProhibitionComponent';

export default function Main() {
  const context = useOutletContext();

  return (
    <div className='relative'>
      <div className='flex flex-col items-center gap-[12px]'>
        {context.isCalendar ? (
          <YearCalendar isCalendar={context.isCalendar} handleColorChipToggle={context.handleColorChipToggle} />
        ) : (
          <Calendar
            handleColorChipToggle={context.handleColorChipToggle}
            selectedDate={context.selectedDate}
            setSelectedDate={context.setSelectedDate}
            isModified={context.isModified}
            to_user_id=''
            isUpdated={context.isUpdated}
          />
        )}
        {context.selectedDate <= dayjs().format('YYYY-MM-DD') ? (
          context.daysDiary.length < context.date + 1 ? (
            <DiaryWritePopup selectedDate={context.selectedDate} />
          ) : context.daysDiary[context.date].content ? (
            <DiaryShow
              content={context.daysDiary[context.date].content}
              diary_id={context.daysDiary[context.date].diary_id}
              selectedDate={context.selectedDate}
              text='분석 결과 보기'
              color='orange'
              handleDayMoodAnalysisToggle={context.handleDayMoodAnalysisToggle}
              handleModified={context.handleModified}
              isModified={context.isModified}
              setIsModified={context.setIsModified}
            />
          ) : (
            <DiaryWritePopup selectedDate={context.selectedDate} />
          )
        ) : (
          <ProhibitionComponent />
        )}
      </div>
    </div>
  );
}
