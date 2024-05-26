import { useEffect, useState } from 'react';
import { defaultAxios } from '../axios/defaultAxios';
import dayjs from 'dayjs';

export default function useMoodCalendar(selectedDate) {
  const [yearMonth, setYearMonth] = useState({
    year: dayjs().format('YYYY'),
    month: dayjs().format('MM'),
  });
  const [daysDiary, setDaysDiary] = useState([]);
  const [moodcolorlist, setMoodcolorlist] = useState([]);

  const getMoodCalendar = async () => {
    try {
      const getMoodCalendarResponse = await defaultAxios.get(
        `/diary/month/${localStorage.getItem('id')}/${yearMonth.year}/${yearMonth.month}/`,
        {
          id: localStorage.getItem('id'),
          year: yearMonth.year,
          month: yearMonth.month,
        }
      );
      console.log(getMoodCalendarResponse.data);
      console.log('이거는 getMoodCalendar 안에서');
      setDaysDiary(getMoodCalendarResponse.data.result);
      setMoodcolorlist(daysDiary.map((diary) => diary.main_mood_color));
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getMoodCalendar();
    console.log('이거는 useMoodCalendar 안에서');
  }, [localStorage.getItem('selectedDate'), selectedDate]);

  return { yearMonth, setYearMonth, daysDiary, moodcolorlist, setMoodcolorlist, getMoodCalendar };
}
