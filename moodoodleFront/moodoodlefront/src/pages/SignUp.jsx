import React from 'react';
import { Link } from 'react-router-dom';
import SignUpComponent from '../components/SignUpComponent';

export default function SignUp() {
  return (
    <div className="flex flex-col justify-center items-center w-[390px] h-screen bg-white">
      <div className="flex flex-col items-center justify-between h-[643px]">
        <Link to="/">
          <img src="/assets/moodoodleLogoMain.svg" alt="logo" />
        </Link>
        <SignUpComponent />
      </div>
    </div>
  );
}
