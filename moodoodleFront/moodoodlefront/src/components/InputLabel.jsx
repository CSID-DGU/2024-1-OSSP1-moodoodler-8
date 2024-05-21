import React from 'react';

export default function InputLabel({ htmlFor, text }) {
  const textStyle = 'w-[271px] text-[13px] font-semibold text-darkGray';
  return (
    <label className={textStyle} htmlFor={htmlFor}>
      &nbsp; {text}
    </label>
  );
}
