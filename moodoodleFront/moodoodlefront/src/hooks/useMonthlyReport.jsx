import { useState, useEffect } from 'react';
import { defaultAxios } from '../axios/defaultAxios';
import dayjs from 'dayjs';

export default function useMonthlyReport() {
  const [date, setDate] = useState({
    year: dayjs().format('YYYY'),
    month: dayjs().format('MM'),
  });

  const [monthlyReport, setMonthlyReport] = useState([]);
  const [monthTagList, setMonthTagList] = useState([]);

  const getMonthlyReport = async () => {
    try {
      const getMonthlyReportResponse = await defaultAxios.get(
        `/user/mypage/report/${localStorage.getItem('id')}/${date.year}/${date.month}/`,
        {
          id: localStorage.getItem('id'),
          year: date.year,
          month: date.month,
        }
      );
      console.log(getMonthlyReportResponse.data);
      setMonthlyReport(getMonthlyReportResponse.data.detail.mood_color_list);
      setMonthTagList(getMonthlyReportResponse.data.detail.mood_tag_list);
      console.log(monthlyReport);
      console.log(monthTagList);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getMonthlyReport();
  }, [date]);

  return {
    monthlyReport,
    monthTagList,
    date,
    setDate,
    getMonthlyReport,
  };
}
