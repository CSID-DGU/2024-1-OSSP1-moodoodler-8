import { useState, useEffect } from 'react';
import { defaultAxios } from '../axios/defaultAxios';
import dayjs from 'dayjs';

export default function useMonthlyReport({ selectedDate }) {
  const [date, setDate] = useState({
    year: dayjs().format('YYYY'),
    month: dayjs().format('MM'),
  });
  const [monthlyReport, setMonthlyReport] = useState([]);
  const [mainColor, setMainColor] = useState({});
  const [monthTagList, setMonthTagList] = useState([]);

  const getMonthlyReport = async () => {
    try {
      const getMonthlyReportResponse = await defaultAxios.get(
        `/user/mypage/report/${localStorage.getItem('id')}/${date.year}/${date.month}/`
      );
      console.error(getMonthlyReportResponse.data);
      setMonthlyReport(getMonthlyReportResponse.data.detail.mood_color_list);
      setMainColor(getMonthlyReportResponse.data.detail.mood_color_list[0]);
      setMonthTagList(getMonthlyReportResponse.data.detail.mood_tag_list);
    } catch (error) {
      setMonthlyReport([]);
      console.error('Error fetching monthly report:', error.response);
    }
  };

  useEffect(() => {
    console.log(selectedDate);
    setDate({
      year: dayjs(selectedDate).format('YYYY'),
      month: dayjs(selectedDate).format('MM'),
    });
  }, [selectedDate]);

  useEffect(() => {
    getMonthlyReport();
  }, [date]);

  return {
    mainColor,
    monthlyReport,
    monthTagList,
    date,
    setDate,
    getMonthlyReport,
  };
}
