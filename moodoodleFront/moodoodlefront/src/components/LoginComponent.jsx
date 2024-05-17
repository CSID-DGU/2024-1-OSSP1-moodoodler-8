import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginButton from '../components/LoginButton';
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
  const boxStyle =
    'w-[283px] h-[43px] pl-[7px] rounded-[10px] bg-gray-scale-1 border border-darkGray/10 text-[13px]';

  return (
    <div className='w-[338px] h-[297px] rounded-[20px] bg-white shadow-loginShadow'>
      {/* 로그인 폼 입력란 */}
      <div>
        <div>
          {/* 아이디 입력란 */}
          <div className='flex justify-center items-center mt-[30px]'>
            <label className={textStyle} htmlFor='username'>
              아이디
            </label>
            <br />
          </div>
          <div className='flex justify-center items-center mb-[10px]'>
            <input
              className={boxStyle}
              type='text'
              id='id'
              value={id}
              onChange={updateLoginFormData}
              onReset={setLoginData}
              placeholder='아이디를 입력하세요'
            />
            <br />
          </div>
          {/* 비밀번호 입력란 */}
          <div className='flex justify-center items-center'>
            <label className={textStyle} htmlFor='password'>
              비밀번호
            </label>
          </div>
          <div className='flex justify-center items-center mb-[10px]'>
            <input
              className={boxStyle}
              type='password'
              id='password'
              value={password}
              onChange={updateLoginFormData}
              onReset={setLoginData}
              placeholder='비밀번호를 입력하세요'
            />
          </div>
          <br />
        </div>
        {loading && (
          <label className='text-red'>아이디 혹은 비밀번호가 틀렸습니다.</label>
        )}
        {/* 로그인 버튼 */}
        <div className='flex justify-center items-center mb-[10px]'>
          <LoginButton text='로그인' onClick={() => login({ id, password })} />
        </div>
        {/* 회원가입 이동 문구 */}
        <div className='flex justify-center items-center'>
          <p className='text-xs text-left text-darkGray mr-[13px]'>
            아직 회원이 아니신가요?
          </p>
          <Link to='/signup' className='text-[13px] font-bold text-lightBlue'>
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}
