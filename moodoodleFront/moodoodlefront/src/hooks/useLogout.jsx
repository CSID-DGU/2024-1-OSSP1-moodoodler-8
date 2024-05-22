import { defaultAxios } from '../axios/defaultAxios';
import { useNavigate } from 'react-router-dom';

export default function useLogout() {
  const navigate = useNavigate();

  const logout = () =>
    defaultAxios
      .post('/user/logout')
      .then(() => {
        localStorage.removeItem('id');
        navigate('/start');
      })
      .catch((error) => {
        const { message } = error.response.data;
        alert(message);
      });

  return { logout };
}
