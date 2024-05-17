import { useState } from 'react';
import { defaultAxios } from '../axios/defaultAxios';
import dayjs from 'dayjs';

export default function useMonthlyReport() {
  const [date, setDate] = useState({
    year: dayjs().format('YYYY'),
    month: dayjs().format('MM'),
  });
  const [monthlyReport, setMonthlyReport] = useState({
    mood_color_list: [
      {
        id: 'FBCFE0',
        color: '#FBCFE0',
        value: 100,
      },
      {
        id: 'FEF4A0',
        value: 56,
        color: '#FEF4A0',
      },
      {
        id: 'B5D3FF',
        color: '#B5D3FF',
        value: 20,
      },
      {
        id: 'FF9191',
        color: '#FF9191',
        value: 14,
      },
      {
        id: 'DBD3FB',
        color: '#DBD3FB',
        value: 10,
      },
    ],
  });
  const [monthTagList, setMonthTagList] = useState({
    month_tag_list: [
      {
        tag_title: '성취감',
        tag_color: 'FEF4A0',
        tag_ratio: 56,
      },
      {
        tag_title: '행복',
        tag_color: 'FBCFE0',
        tag_ratio: 50,
      },
      {
        tag_title: '기쁨',
        tag_color: 'FBCFE0',
        tag_ratio: 50,
      },
      {
        tag_title: '외로운',
        tag_color: 'B5D3FF',
        tag_ratio: 20,
      },
      {
        tag_title: '화남',
        tag_color: 'FF9191',
        tag_ratio: 7,
      },
    ],
  });

  const getMonthlyReport = async () => {
    try {
      const getMonthlyReportResponse = await defaultAxios.get(
        `/user/mypage/report/${date.year}/${date.month}`,
        {
          id: localStorage.getItem('id'),
          year: date.year,
          month: date.month,
        },
      );
      setMonthlyReport(getMonthlyReportResponse.data.detail[0]);
      setMonthTagList(getMonthlyReportResponse.data.detail[1]);
    } catch (error) {
      const { status_code } = error.response.data.status_code;
      console.log(status_code);
    }
  };

  return {
    monthlyReport,
    monthTagList,
    date,
    setDate,
    getMonthlyReport,
  };
}
