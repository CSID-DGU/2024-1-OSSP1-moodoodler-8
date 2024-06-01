import { useEffect, useState } from 'react';
import { defaultAxios } from '../axios/defaultAxios';
import dayjs from 'dayjs';

export default function useMoodCalendar(selectedDate, isModified, to_user_id) {
  const [yearMonth, setYearMonth] = useState({
    year: dayjs().format('YYYY'),
    month: dayjs().format('MM'),
  });
  const [daysDiary, setDaysDiary] = useState([]);
  const [moodcolorlist, setMoodcolorlist] = useState([]);

  const getMoodCalendar = async () => {
    try {
      const response = await defaultAxios.get(
        `/diary/month/${localStorage.getItem('id')}/${yearMonth.year}/${yearMonth.month}/`
      );
      const diaryData = response.data.result;
      setDaysDiary(diaryData);
      setMoodcolorlist(diaryData.map((diary) => diary.main_mood_color));
    } catch (error) {
      console.error(error);
    }
  };

  // 친구 무드 캘린더 받아오기
  const getFriendMoodCalendar = async (to_user_id) => {
    try {
      const response = await defaultAxios.get(
        `/friend/calendar/${localStorage.getItem('id')}/${to_user_id}/${yearMonth.year}/${yearMonth.month}/`
      );
      const diaryData = response.data.result;
      setDaysDiary(diaryData);
      setMoodcolorlist(diaryData.map((diary) => diary.main_mood_color));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMoodCalendar();
  }, [yearMonth, isModified]);

  useEffect(() => {
    setYearMonth({
      year: dayjs(selectedDate).format('YYYY'),
      month: dayjs(selectedDate).format('MM'),
    });
  }, [selectedDate]);

  return { yearMonth, setYearMonth, daysDiary, moodcolorlist, getMoodCalendar, getFriendMoodCalendar };
}
