import React from 'react';

export default function CustomButton({ width, text, color, disabled, onClick }) {
  const colorVariants = {
    lemon: 'bg-[#FEFBE7]',
    skyblue: 'bg-[#EAF3FF]',
    pink: 'bg-[#FFEEF4]',
    orange: 'bg-[#FEF1E7]',
    purple: 'bg-[#F2EEFF]',
  };

  const commonStyle = `${width ? width : 'w-[95px]'} h-[31px] rounded-[30px] font-semibold text-darkGray shadow-buttonShadow text-[12px] h-[31px] ${colorVariants[color]}`;
  return (
    <button className={commonStyle} type='button' disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
}
