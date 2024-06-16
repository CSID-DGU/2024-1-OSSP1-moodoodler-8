import { useState } from 'react';
import { defaultAxios } from '../axios/defaultAxios';

export default function useDiaryAnalysis(diary_id) {
  const [mainColor, setMainColor] = useState('');
  const [mainColorName, setMainColorName] = useState('');
  const [analysisResult, setAnalysisResult] = useState([]);
  const [musicInfo, setMusicInfo] = useState({ music: {}, similarity: '' });

  const getDiaryAnalysis = async () => {
    try {
      const getDiaryAnalysisrResponse = await defaultAxios.get(
        `/diary/detail/${localStorage.getItem('id')}/${diary_id}/`,
        {
          id: localStorage.getItem('id'),
          diary_id: diary_id,
        }
      );
      setMainColor(getDiaryAnalysisrResponse.data.detail[0].mood_color);
      setMainColorName(getDiaryAnalysisrResponse.data.detail[0].mood_name);
      setAnalysisResult(getDiaryAnalysisrResponse.data.detail);
      console.log(getDiaryAnalysisrResponse.data);
    } catch (error) {
      console.error('Error getting diary Analysis:', error.response);
    }
  };

  const getRecommendedMusic = async () => {
    try {
      const response = await defaultAxios.get(`/music/recomand/${localStorage.getItem('id')}/${diary_id}/`, {
        id: localStorage.getItem('id'),
        diary_id: diary_id,
      });
      setMusicInfo({
        ...musicInfo,
        music: response.data.recomand_music.music,
        similarity: response.data.recomand_music.similarity,
      });
    } catch (error) {
      console.error('Error getting Music:', error.response);
    }
  };

  return { mainColor, mainColorName, analysisResult, getDiaryAnalysis, musicInfo, getRecommendedMusic };
}
