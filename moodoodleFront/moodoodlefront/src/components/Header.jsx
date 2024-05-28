import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='flex sticky top-0 z-50 w-screen justify-center items-center h-[64px] bg-white shadow-headerShadow'>
      <div className='flex justify-start w-[390px]'>
        <div className='flex w-[230px] h-[22px] justify-between ml-[24px]'>
          <Link to='/alarm'>
            <button type='button'>
              <img src='/assets/bell.svg' alt='알람' />
            </button>
          </Link>
          <Link to='/main'>
            <img src='/assets/moodoodleLogo.svg' alt='logo' />
          </Link>
        </div>
      </div>
    </div>
  );
}
