import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { defaultAxios } from '../axios/defaultAxios';
import dayjs from 'dayjs';

export default function useSignup() {
  const navigate = useNavigate();
  const [signupInfo, setSignupInfo] = useState({
    id: '',
    password: '',
    nickname: '',
    birthdate: '',
  });

  const [isUniqued, setIsUniqued] = useState({
    userId: false,
  });

  const updateSignupFormData = (event) => {
    const targetId = event.target.id;
    setSignupInfo((prev) => ({ ...prev, [targetId]: event.target.value }));
  };

  const checkIdDuplicate = async (userId) => {
    try {
      const getUserIdDuplicated = await defaultAxios.post('/user/duplicated/', { id: userId });
      setIsUniqued((prev) => ({ ...prev, userId: true }));
      alert('사용 가능한 아이디입니다.');
    } catch (error) {
      alert('중복되는 아이디입니다.');
      setIsUniqued((prev) => ({ ...prev, userId: false }));
    }
  };

  const resetValidation = (id) => {
    setIsUniqued((prev) => ({ ...prev, [id]: false }));
  };

  const postSignupInfo = async (birthdate) => {
    console.log(birthdate);
    try {
      const postSignupInfoResponse = await defaultAxios.post('/user/signup/', {
        id: signupInfo.id,
        password: signupInfo.password,
        nickname: signupInfo.nickname,
        created: dayjs().format('YYYY-MM-DD'),
        birthdate: birthdate,
      });
      console.log(postSignupInfoResponse);
      localStorage.setItem('id', signupInfo.id);
      setSignupInfo({ ...signupInfo, birthdate: birthdate });
      navigate('/survey');
    } catch (error) {
      console.log(error.response);
    }
  };

  return {
    signupInfo,
    isUniqued,
    setSignupInfo,
    postSignupInfo,
    updateSignupFormData,
    checkIdDuplicate,
    resetValidation,
  };
}
