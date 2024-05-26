import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { defaultAxios } from '../axios/defaultAxios';

export default function useDiaryWrite() {
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const selectedDate = localStorage.getItem('selectedDate');

  const handleSubmit = async () => {
    const postDiaryData = {
      id: localStorage.getItem('id'),
      date: selectedDate,
      content: content,
    };
    try {
      const postDiaryResponse = await defaultAxios.post('/diary/create/', postDiaryData);
      console.log(postDiaryResponse.data.data.diary_id);
      localStorage.setItem('diary_id', postDiaryResponse.data.data.diary_id);
      setContent('');
      navigate(`/analysis/${selectedDate}`);
    } catch (error) {
      console.log(error.response.status);
    }
  };

  const handleModifiedDiary = async ({ diary_id, modifiedContent, setModifiedContent, handleModified }) => {
    const putDiaryData = {
      id: localStorage.getItem('id'),
      diary_id: diary_id,
      date: selectedDate,
      content: modifiedContent,
    };
    try {
      const putDiaryResponse = await defaultAxios.put(`/diary/update/${diary_id}/`, putDiaryData);
      console.log(putDiaryResponse.data);
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
        `/diary/update/${localStorage.getItem('id')}/${diary_id}/`,
        deleteDiaryData
      );
      console.log(deleteDiaryResponse.data);
      handleModified();
    } catch (error) {
      console.log(error.response);
    }
  };
  return { content, setContent, selectedDate, handleSubmit, handleModifiedDiary, handleDeleteDiary };
}
