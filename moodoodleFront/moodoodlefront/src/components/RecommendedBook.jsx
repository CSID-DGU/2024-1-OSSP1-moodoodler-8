import React from 'react';

export default function RecommendedBook({ bookInfo }) {
  return (
    <div className='flex flex-col h-[295px] justify-between items-center mb-[31px]'>
      <p className='font-bold text-normal text-darkNavy'>오늘의 추천 도서</p>
      <img src={`${bookInfo.cover}`} alt='book_cover' className='w-[121px] h-[134px]' />
      <div className='flex flex-col justify-between items-center gap-[5px]'>
        <p className='font-semibold text-[14px] text-darkGray leading-[-5px]'>{bookInfo.title}</p>
        <p className='font-medium text-[12px] text-darkGray leading-[-5px]'>{bookInfo.author}</p>
      </div>
      <p className='w-[299px] text-[12px] text-center font-medium text-darkGray'>{bookInfo.description}</p>
    </div>
  );
}
