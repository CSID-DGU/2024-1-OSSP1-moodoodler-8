import React from 'react';
import useMonthlyReport from '../hooks/useMonthlyReport';

export default function ProhibitionReport() {
  return (
    <div className='flex justify-center items-center w-[342px] h-[300px]'>
      <div className='flex flex-col justify-between items-center w-[342px] h-[100px]'>
        <img src='/assets/warning.svg' alt='경고' />
        <p className='font-bold text-base text-center text-darkNavy'>
          월간 레포트를 정산할 수 없습니다. <br /> 달력 이동 또는 다른 서비스를 이용해주세요!
        </p>
      </div>
    </div>
  );
}
