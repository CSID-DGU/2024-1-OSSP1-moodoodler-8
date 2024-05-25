import { useNavigate } from 'react-router-dom';
import { defaultAxios } from '../axios/defaultAxios';

export default function useDiaryWrite() {
  const navigate = useNavigate();
  const selectedDate = localStorage.getItem('selectedDate');

  const handleSubmit = async ({ content, setContent }) => {
    const postDiaryData = {
      id: localStorage.getItem('id'),
      date: selectedDate,
      content: content,
    };
    try {
      const postDiaryResponse = await defaultAxios.post('/diary/create/', postDiaryData);
      console.log(postDiaryResponse.data);
      setContent('');
      navigate(`/analysis/${selectedDate}`);
    } catch (error) {
      console.log(error.response.status);
    }
  };
  return { selectedDate, handleSubmit };
}
