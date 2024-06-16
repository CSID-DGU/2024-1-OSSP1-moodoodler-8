import React from 'react';
import PRIVACY_TERM from '../constants/privacypolicy';
export default function PrivacyPolicy() {
  return (
    <div className='flex justify-center flex-col items-center bg-white'>
      <div className='flex flex-col items-center gap-[19px] pt-[30px]'>
        <p className='font-extrabold text-[25px]'>개인정보 처리방침</p>
        {PRIVACY_TERM.map((privacy) => (
          <div key={privacy.title} className='flex flex-col justify-start gap-[19px] w-[315px]'>
            <p className='font-bold text-[14px] text-darkDray'>{privacy.title}</p>
            <div className='font-extralight text-[13px] text-darkDray/80 whitespace-pre-wrap'>{privacy.article}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
