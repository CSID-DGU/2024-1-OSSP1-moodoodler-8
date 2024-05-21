import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginButton from '../components/LoginButton';
import InputComponent from './InputComponent';

export default function LoginComponent() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [loginCheck, setLoginCheck] = useState(false); // 로그인 상태 체크
  // 스타일 설정
  const textStyle = 'w-[271px] text-[13px] font-semibold text-darkGray';
  const boxStyle =
    'w-[283px] h-[43px] pl-[7px] rounded-[10px] bg-gray-scale-1 border border-darkGray/10 text-[13px]';

  const navigate = useNavigate();

  const idHandler = (e) => {
    setId(e.currentTarget.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));

    const response = await fetch('로그인 서버 주소', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        password: password,
      }),
    });
    const result = await response.json();

    if (response.status === 200) {
      setLoginCheck(false);
      // 웹 페이지의 세션 동안 데이터를 저장하는데 사용되는 저장소
      sessionStorage.setItem('token', result.token);
      sessionStorage.setItem('id', result.id); // 여기서 userid를 저장
      console.log('로그인성공, 아이디:' + result.id);
      navigate('/'); // 로그인 성공시 홈으로 이동
    } else {
      // 여기서 api에 작성된 response 값으로 구분
      setLoginCheck(true);
    }
  };

  return (
    <div className='flex w-[338px] h-[297px] rounded-[20px] justify-center items-center bg-white shadow-loginShadow'>
      <div className='flex flex-col justify-between items-center'>
        {/* 로그인 폼 입력란 */}
        <form
          className='login-form flex flex-col gap-[10px]'
          onSubmit={handleLogin}
        >
          <div>
            {/* 아이디 입력란 */}
            <div className='flex flex-col items-start gap-[10px]'>
              <InputComponent
                text='아이디'
                type='text'
                id='username'
                value={id}
                onChange={idHandler}
                placeholder='아이디를 입력하세요'
              />
            </div>
          </div>
          <div>
            {/* 비밀번호 입력란 */}
            <div className='flex flex-col justify-center items-start'>
              <InputComponent
                text='비밀번호'
                type='password'
                id='password'
                value={password}
                onChange={passwordHandler}
                placeholder='비밀번호를 입력하세요'
              />
            </div>
            <br />
          </div>
          {loginCheck && (
            <label className='text-red'>
              아이디 혹은 비밀번호가 틀렸습니다.
            </label>
          )}
          {/* 로그인 버튼 */}
          <div className='flex flex-col gap-[10px] items-center'>
            <LoginButton text='로그인' onClick={handleLogin} />
            {/* 회원가입 이동 문구 */}
            {/* 이 버튼을 누르면 Warning: Expected `onClick` listener to be a function,
            instead got a value of `string` type. */}
            <div className='flex justify-center items-center'>
              <p className='text-xs text-left text-darkGray'>
                아직 회원이 아니신가요? &nbsp; |
              </p>
              <Link
                className='text-[13px] font-bold text-lightBlue'
                to='/signup'
              >
                &nbsp; &nbsp;회원가입
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
