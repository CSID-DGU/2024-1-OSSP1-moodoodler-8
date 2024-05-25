import { useEffect, useState } from 'react';
import { defaultAxios } from '../axios/defaultAxios';
import dayjs from 'dayjs';

export default function useMoodCalendar(selectedDate) {
  const [yearMonth, setYearMonth] = useState({
    year: dayjs(selectedDate).format('YYYY'),
    month: dayjs(selectedDate).format('MM'),
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
      console.log(selectedDate);
      setDaysDiary(getMoodCalendarResponse.data.result);
      console.log(daysDiary);
      setMoodcolorlist(daysDiary.map((diary) => diary.main_mood_color));
      console.log(moodcolorlist);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getMoodCalendar();
  }, [yearMonth]);

  return { yearMonth, setYearMonth, daysDiary, moodcolorlist, setMoodcolorlist, getMoodCalendar };
}
