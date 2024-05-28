import { useState, useEffect } from 'react';
import { defaultAxios } from '../axios/defaultAxios';
import dayjs from 'dayjs';

export default function useMonthlyReport({ selectedDate }) {
  const [date, setDate] = useState({
    year: dayjs(selectedDate).format('YYYY'),
    month: dayjs(selectedDate).format('MM'),
  });
  const [mainColor, setMainColor] = useState({});
  const [dataArray, setdataArray] = useState([{ id: '', value: '', color: '' }]);

  const [monthlyReport, setMonthlyReport] = useState([]);
  const [monthTagList, setMonthTagList] = useState([]);

  const getMonthlyReport = async () => {
    try {
      const getMonthlyReportResponse = await defaultAxios.get(
        `/user/mypage/report/${localStorage.getItem('id')}/${date.year}/${date.month}/`
      );
      setMonthlyReport(getMonthlyReportResponse.data.detail.mood_color_list);
      setMainColor(getMonthlyReportResponse.data.detail.mood_color_list[0]);

      setMonthTagList(getMonthlyReportResponse.data.detail.mood_tag_list);
    } catch (error) {
      console.error('Error fetching monthly report:', error.response);
    }
  };

  useEffect(() => {
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
    dataArray,
    monthlyReport,
    monthTagList,
    date,
    setDate,
    getMonthlyReport,
  };
}
