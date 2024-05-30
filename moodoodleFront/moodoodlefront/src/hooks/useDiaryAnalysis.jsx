import { useState } from 'react';
import { defaultAxios } from '../axios/defaultAxios';

export default function useDiaryAnalysis() {
  const [mainColor, setMainColor] = useState('');
  const [mainColorName, setMainColorName] = useState('');
  const [analysisResult, setAnalysisResult] = useState([]);

  const [musicList, setMusicList] = useState([]);
  const [music, setMusic] = useState({});

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

  const getRecommendedMusic = async (diary_id) => {
    console.log(diary_id);
    try {
      const response = await defaultAxios.get(`/music/recomand/${localStorage.getItem('id')}/${diary_id}/`, {
        id: localStorage.getItem('id'),
        diary_id: diary_id,
      });
      console.log(response.data);
      setMusicList(response.data.recomand_music);
      setMusic(musicList[0]);
    } catch (error) {
      console.error('Error getting Music:', error.response);
    }
  };

  return { mainColor, mainColorName, analysisResult, getDiaryAnalysis, music, getRecommendedMusic };
}
