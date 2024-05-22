import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from '../components/LoginButton';
import InputComponent from './InputComponent';
import useLogin from '../hooks/useLogin';

export default function LoginComponent() {
  const {
    loading,
    loginData: { id, password },
    setLoginData,
    updateLoginFormData,
    login,
  } = useLogin();

  // 스타일 설정
  const textStyle = 'w-[271px] text-[13px] font-semibold text-darkGray';
  const boxStyle = 'w-[283px] h-[43px] pl-[7px] rounded-[10px] bg-gray-scale-1 border border-darkGray/10 text-[13px]';

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
