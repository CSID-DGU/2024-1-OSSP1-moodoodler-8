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
  const boxStyle = 'w-[283px] h-[43px] pl-[7px] rounded-[10px] bg-gray-scale-1 border border-darkGray/10 text-[13px]';

  return (
    <div className="flex justify-center items-center w-[338px] h-[297px] rounded-[20px] bg-white shadow-loginShadow">
      <div className="flex flex-col h-[250px] items-center justify-between">
        <div className="flex flex-col h-[140px] justify-between items-center">
          <div className="flex flex-col h-[61px] justify-between">
            <p className={textStyle}>&nbsp; 아이디</p>
            <div className="flex justify-center items-center">
              <input
                className={boxStyle}
                type="text"
                id="id"
                value={id}
                onChange={updateLoginFormData}
                onReset={setLoginData}
                placeholder="아이디를 입력하세요"
              />
            </div>
          </div>
          <div className="flex flex-col h-[61px] justify-between">
            <p className={textStyle}>&nbsp; 비밀번호</p>
            <div className="flex justify-center items-center mb-[10px]">
              <input
                className={boxStyle}
                type="password"
                id="password"
                value={password}
                onChange={updateLoginFormData}
                onReset={setLoginData}
                placeholder="비밀번호를 입력하세요"
              />
            </div>
          </div>
        </div>
        <div className="flex h-[13px] justify-center items-center">
          <p className={`text-center text-[13px] text-red-600 ${loading ? '' : 'hidden'}`}>
            아이디 혹은 비밀번호가 틀렸습니다.
          </p>
        </div>
        <LoginButton text="로그인" onClick={() => login({ id, password })} />
        <div className="flex justify-center items-center">
          <p className="text-xs text-left text-darkGray mr-[13px]">아직 회원이 아니신가요?</p>
          <Link to="/signup" className="text-[13px] font-bold text-lightBlue">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}
