import React from 'react';
import { Link } from 'react-router-dom';
import LoginComponent from '../components/LoginComponent';

export default function Login() {
  return (
    <div className='flex justify-center flex-col items-center w-full h-screen bg-white'>
      <div className='flex flex-col h-[368px] items-center justify-between'>
        <Link to='/'>
          <img src='/assets/moodoodleLogoMain.svg' alt='logo' />
        </Link>
        <LoginComponent />
      </div>
    </div>
  );
}
