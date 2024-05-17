import React from 'react';

export default function GenreButton({ genre }) {
  return (
    <button
      type="button"
      className="flex flex-row justify-center items-center w-[313px] h-[31px] rounded-[30px] bg-[#FFEEF4] shadow-buttonShadow text-[12px] text-darkGray font-normal"
    >
      {genre}
    </button>
  );
}
