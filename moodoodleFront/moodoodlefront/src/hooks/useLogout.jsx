import { defaultAxios } from '../axios/defaultAxios';
import { useNavigate } from 'react-router-dom';

export default function useLogout() {
  const navigate = useNavigate();

  const logout = () =>
    defaultAxios
      .post('/user/logout/')
      .then(() => {
        localStorage.removeItem('id');
        localStorage.removeItem('selectedDate');
        navigate('/');
      })
      .catch((error) => {
        console.log(error.response);
      });

  return { logout };
}
