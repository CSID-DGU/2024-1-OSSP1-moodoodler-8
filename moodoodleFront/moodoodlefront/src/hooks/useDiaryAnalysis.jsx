import { useState } from 'react';
import { defaultAxios } from '../axios/defaultAxios';

export default function useDiaryAnalysis() {
  const [analysisResult, setAnalysisResult] = useState([
    {
      mood_color: 'B5D3FF',
      ratio: 60,
      mood_list: [
        {
          diary_mood_id: 3,
          mood_title: '슬픔',
          mood_ratio: 25,
        },
        {
          diary_mood_id: 4,
          mood_title: '지루함',
          mood_ratio: 15,
        },
      ],
    },
    {
      mood_color: 'FBCFE0',
      ratio: 40,
      mood_list: [
        {
          diary_mood_id: 1,
          mood_title: '행복',
          mood_ratio: 40,
        },
        {
          diary_mood_id: 2,
          mood_title: '즐거움',
          mood_ratio: 20,
        },
      ],
    },
  ]);

  const getDiaryAnalysis = async (diary_id) => {
    try {
      const getDiaryAnalysisrResponse = await defaultAxios.get(
        `/diary/detail/${localStorage.getItem('id')}/${diary_id}/`,
        {
          id: localStorage.getItem('id'),
          diary_id: diary_id,
        }
      );
      setAnalysisResult(getDiaryAnalysisrResponse.data);
    } catch (error) {
      console.error('Error getting profile:', error.response);
    }
  };

  return { analysisResult, getDiaryAnalysis };
}
