import { useEffect, useState } from 'react';
import { defaultAxios } from '../axios/defaultAxios';
import dayjs from 'dayjs';

export default function useMoodYearCalendar() {
  const [year, setYear] = useState(dayjs().format('YYYY'));
  const [monthlyDiary, setMonthlyDiary] = useState([]);

  const getMoodYearCalendar = async () => {
    try {
      const response = await defaultAxios.get(`/diary/year/${localStorage.getItem('id')}/${year}/`);
      setMonthlyDiary(response.data.result);
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
  };
}
