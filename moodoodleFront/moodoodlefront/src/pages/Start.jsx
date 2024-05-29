import React from 'react';
import { Link } from 'react-router-dom';
import MainButton from '../components/MainButton';

export default function Start() {
  return (
    <div className='realtvie flex flex-col justify-center items-center w-full h-screen bg-gradient-to-br from-yellow-100 via-red-100 to-purple-100'>
      <div className='flex flex-col justify-between items-center w-[319px] h-[207px]'>
        <div className='text-[16px] font-bold text-center text-black'>
          여러분의 감정을
          <br />
          다채로운 색깔로 기록하고 관리하는 다이어리
        </div>
        <img src='/assets/moodoodleLogoMain.svg' alt='logo' />
        <div className='flex flex-col items-center'>
          <Link to='/login'>
            <MainButton text='로그인' />
          </Link>
          <Link to='/signup'>
            <MainButton text='회원가입' />
          </Link>
        </div>
      </div>
      <div className='absolute bottom-[10px] flex flex-col h-[63px] items-center justify-between'>
        <p className='text-sm text-black'>
          <span className='text-sm font-medium'>우리의 서비스, </span>
          <span className='text-sm font-bold'>MOODOODLE</span>
          <span className='text-sm font-medium'>이 궁금하다면?</span>
        </p>
        <Link to='/moodoodle'>
          <div className='flex flex-col items-center'>
            <p className='text-center text-[10px] font-medium'>더 알아보기</p>
            <img src='/assets/down.svg' alt='down' />
          </div>
        </Link>
      </div>
    </div>
  );
}
