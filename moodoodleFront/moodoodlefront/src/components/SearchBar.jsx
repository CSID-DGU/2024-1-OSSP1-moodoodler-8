import React from 'react';
// 링크 삽입해서 친구의 달력 확인

export default function SearchBar() {
  return (
    <div className='w-[338px] h-[39px] relative'>
      <div className='w-[338px] h-[39px]'>
        <div className='flex justify-around items-center w-[338px] h-[39px] rounded-[15px] bg-gray-scale-1/[0.66] shadow-headerShadow'>
          <input
            className='w-[280px] text-[14px] bg-gray-scale-1/[0.66] text-left text-gray-scale-3'
            placeholder='친구의 아이디를 검색해주세요'
          />
          <button>
            <img src='/assets/search.svg' alt='search' />
          </button>
        </div>
      </div>
    </div>
  );
}
