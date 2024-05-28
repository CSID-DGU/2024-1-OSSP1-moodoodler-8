import { useEffect, useState } from 'react';
import { defaultAxios } from '../axios/defaultAxios';
import dayjs from 'dayjs';

export default function useMoodYearCalendar() {
  const [year, setYear] = useState(dayjs().format('YYYY'));
  const [monthlyDiary, setMonthlyDiary] = useState([]);

  const getMoodYearCalendar = async () => {
    try {
      const getMoodYearCalendarResponse = await defaultAxios.get(`/diary/year/${localStorage.getItem('id')}/${year}/`, {
        id: localStorage.getItem('id'),
        year: year,
      });
      console.log(getMoodYearCalendarResponse.data.result);
      setMonthlyDiary(getMoodYearCalendarResponse.data.result);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getMoodYearCalendar();
  }, [year]);

  return {
    year,
    setYear,
    monthlyDiary,
    getMoodYearCalendar,
  };
}
