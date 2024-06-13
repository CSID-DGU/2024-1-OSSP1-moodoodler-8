import { useNavigate } from 'react-router-dom';
import { defaultAxios } from '../axios/defaultAxios';

export default function useCancel() {
  const navigate = useNavigate();
  const cancel = () =>
    defaultAxios
      .delete(`/user/delete/${localStorage.getItem('id')}/`, { id: localStorage.getItem('id') })
      .then(() => {
        localStorage.removeItem('id');
        localStorage.removeItem('selectedDate');
        navigate('/');
      })
      .catch((error) => {
        console.log(error.response);
      });

  return { cancel };
}
