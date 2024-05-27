import { useEffect, useState } from 'react';
import { defaultAxios } from '../axios/defaultAxios';

export default function useDiaryAnalysis() {
  const [mainColor, setMainColor] = useState('');
  const [analysisResult, setAnalysisResult] = useState([]);

  const getDiaryAnalysis = async (diary_id) => {
    console.log(diary_id);
    try {
      const getDiaryAnalysisrResponse = await defaultAxios.get(
        `/diary/detail/${localStorage.getItem('id')}/${diary_id}/`,
        {
          id: localStorage.getItem('id'),
          diary_id: diary_id,
        }
      );
      console.log(getDiaryAnalysisrResponse.data.detail);
      setMainColor(getDiaryAnalysisrResponse.data.detail[0].mood_color);
      setAnalysisResult(getDiaryAnalysisrResponse.data.detail);
    } catch (error) {
      console.error('Error getting diary Analysis:', error.response);
    }
  };

  return { mainColor, analysisResult, getDiaryAnalysis };
}
