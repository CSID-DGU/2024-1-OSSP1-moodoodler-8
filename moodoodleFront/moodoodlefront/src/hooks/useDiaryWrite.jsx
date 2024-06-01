import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { defaultAxios } from '../axios/defaultAxios';
import useDiaryAnalysis from './useDiaryAnalysis';

export default function useDiaryWrite() {
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const { getDiaryAnalysis } = useDiaryAnalysis();

  const handleSubmit = async () => {
    const postDiaryData = {
      id: localStorage.getItem('id'),
      date: localStorage.getItem('selectedDate'),
      content: content,
    };
    try {
      const postDiaryResponse = await defaultAxios.post('/diary/create/', postDiaryData);
      console.log(postDiaryResponse.data.data.diary_id);
      localStorage.setItem('diary_id', postDiaryResponse.data.data.diary_id);
      localStorage.setItem('content', postDiaryResponse.data.data.content);
      getDiaryAnalysis(postDiaryResponse.data.data.diary_id);
      setContent(postDiaryResponse.data.data.content);
      navigate(`/analysis/${localStorage.getItem('selectedDate')}`);
    } catch (error) {
      console.log(error.response.status);
    }
  };

  const handleModifiedDiary = async ({
    selectedDate,
    diary_id,
    modifiedContent,
    setModifiedContent,
    handleModified,
  }) => {
    const putDiaryData = {
      id: localStorage.getItem('id'),
      diary_id: diary_id,
      date: selectedDate,
      content: modifiedContent,
    };
    try {
      const putDiaryResponse = await defaultAxios.put(`/diary/update/${diary_id}/`, putDiaryData);
      setModifiedContent('');
      handleModified();
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleDeleteDiary = async ({ diary_id, handleModified }) => {
    const deleteDiaryData = {
      id: localStorage.getItem('id'),
      diary_id: diary_id,
    };
    try {
      const deleteDiaryResponse = await defaultAxios.delete(
        `/diary/delete/${localStorage.getItem('id')}/${diary_id}/`,
        deleteDiaryData
      );
      handleModified();
    } catch (error) {
      console.log(error.response);
    }
  };
  return { content, setContent, handleSubmit, handleModifiedDiary, handleDeleteDiary };
}
