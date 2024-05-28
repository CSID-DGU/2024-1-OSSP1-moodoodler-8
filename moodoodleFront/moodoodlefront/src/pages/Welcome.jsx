import React from 'react';
import { Link } from 'react-router-dom';
import MainButton from '../components/MainButton';

export default function Welcome() {
  return (
    <div className="realtvie flex flex-col justify-center items-center w-full h-screen bg-gradient-to-br from-yellow-100 via-red-100 to-purple-100">
      <div className="flex flex-col justify-between items-center w-[260px] h-[194px]">
        <img src="/assets/moodoodleLogoMain.svg" alt="logo" />
        <div className="text-[19px] font-bold text-center text-black">회원가입이 완료되었습니다!</div>
        <div className="flex flex-col items-center">
          <Link to="/login">
            <MainButton text="로그인" />
          </Link>
          <Link to="/signup">
            <MainButton text="회원가입" />
          </Link>
        </div>
      </div>
    </div>
  );
}
