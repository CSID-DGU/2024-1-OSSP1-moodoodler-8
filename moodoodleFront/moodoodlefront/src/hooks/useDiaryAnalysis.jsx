import { useEffect, useState } from 'react';
import { defaultAxios } from '../axios/defaultAxios';

export default function useDiaryAnalysis() {
  const [mainColor, setMainColor] = useState('');
  const [mainColorName, setMainColorName] = useState('');
  const [analysisResult, setAnalysisResult] = useState([]);

  const [song, setSong] = useState({});

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
      setMainColorName(getDiaryAnalysisrResponse.data.detail[0].mood_name);
      setAnalysisResult(getDiaryAnalysisrResponse.data.detail);
    } catch (error) {
      console.error('Error getting diary Analysis:', error.response);
    }
  };

  const getRecommandationMusic = async (diary_id) => {
    console.log(diary_id);
    try {
      const getRecommandationMusicResponse = await defaultAxios.get(`/music/recomand/${diary_id}/`, {
        diary_id: diary_id,
      });
      console.log(getRecommandationMusicResponse.data.recommand_music);
      setSong(getRecommandationMusicResponse.data.recommand_music);
    } catch (error) {
      console.error('Error getting Music:', error.response);
    }
  };

  return { mainColor, mainColorName, analysisResult, getDiaryAnalysis, song, getRecommandationMusic };
}
