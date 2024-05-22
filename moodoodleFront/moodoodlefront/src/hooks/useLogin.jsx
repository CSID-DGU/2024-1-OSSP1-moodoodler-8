import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { defaultAxios } from '../axios/defaultAxios';

export default function useLogin() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ id: '', password: '' });

  const updateLoginFormData = (event) => {
    const targetId = event.target.id;
    setLoginData((prev) => ({ ...prev, [targetId]: event.target.value }));
  };

  const login = async (body) => {
    try {
      setLoading(false);
      const loginResponse = await defaultAxios.post('/user/login/', body);
      localStorage.setItem('id', loginResponse.data.data.id);
      navigate('/main');
    } catch (error) {
      console.log(error.response.data);
      setLoading(true);
    }
  };
  return { loading, loginData, setLoginData, updateLoginFormData, login };
}
