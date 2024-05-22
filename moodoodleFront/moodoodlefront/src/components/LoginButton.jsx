import React from 'react';

export default function LoginButton({ text, onClick, disabled }) {
  const commonStyle =
    'w-[176px] h-[29px] rounded-[30px] font-semibold text-darkGray shadow-buttonShadow text-[12px] bg-[#F2EEFF]';
  return (
    <button className={commonStyle} type="button" disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
}
