import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Argreement from './Argreement';
import SignUpComponent from '../../components/SignUpComponent';

export default function SignUp() {
  const [isAgree, setIsAgree] = useState(false);
  function moveStep() {
    setIsAgree((prev) => !prev);
  }
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen bg-white'>
      <div className='flex flex-col items-center justify-between h-[643px] gap-[20px]'>
        <Link to='/'>
          <img src='/assets/moodoodleLogo_bg.svg' alt='logo' />
        </Link>
        {isAgree ? <SignUpComponent /> : <Argreement moveStep={moveStep} />}
      </div>
    </div>
  );
}
