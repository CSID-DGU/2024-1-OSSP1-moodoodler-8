import React from 'react';

export default function GenreButton({ genre, onClick, isClick }) {
  return (
    <button
      onClick={onClick}
      type='button'
      className={`flex flex-row justify-center items-center w-[313px] h-[31px] rounded-[30px] bg-[#FFEEF4] shadow-buttonShadow text-[12px] text-darkGray font-normal ${isClick} hover:border border-[#d6c2c9]`}>
      {genre}
    </button>
  );
}
