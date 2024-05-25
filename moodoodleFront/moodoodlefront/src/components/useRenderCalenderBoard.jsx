import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import useMoodCalendar from '../hooks/useMoodCalendar';

const useRenderCalenderBoard = (selectedDate, setSelectedDate) => {
  const { setYearMonth, moodcolorlist } = useMoodCalendar(selectedDate);
  const [arr, setArr] = useState([null]);
  const [moodArr, setMoodArr] = useState([]);

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
      i < firstDay ? null : moodcolorlist[i - firstDay]
    );
  };

  useEffect(() => {
    setSelectedDate(selectedDate);
    localStorage.setItem('selectedDate', selectedDate);
    setYearMonth({ year: dayjs(selectedDate).format('YYYY'), month: dayjs(selectedDate).format('MM') });
    const firstDay = dayjs(selectedDate).startOf('month').day();
    const daysInMonth = dayjs(selectedDate).daysInMonth();
    setArr(initArr(firstDay, daysInMonth));
    setMoodArr(moodColorArr(firstDay, daysInMonth));
  }, [selectedDate]);

  const content = arr.map((v, i) => (
    <div className="flex justify-center" key={v ? v.toString() : `${v}${i}`}>
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
              className="flex justify-center items-center w-[22px] h-[22px] rounded-full bg-gray-scale-1 text-center cursor-pointer"
              date={v}
              onClick={() => setSelectedDate(v)}>
              {dayjs(v).date()}
            </div>
          )
        ) : (
          <div
            className="flex justify-center items-center w-[22px] h-[22px] rounded-full bg-gray-scale-1 text-center cursor-pointer"
            date={v}
            onClick={() => setSelectedDate(v)}>
            {dayjs(v).date()}
          </div>
        ))}
    </div>
  ));

  return content;
};

export default useRenderCalenderBoard;
