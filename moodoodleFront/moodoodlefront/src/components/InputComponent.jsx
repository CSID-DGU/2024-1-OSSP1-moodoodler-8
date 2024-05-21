import React from 'react';
import InputLabel from './InputLabel';

export default function InputComponent({
  text,
  type,
  id,
  value,
  onChange,
  placeholder,
}) {
  const boxStyle =
    'w-[283px] h-[43px] pl-[7px] rounded-[10px] bg-gray-scale-1 border border-darkGray/10 text-[13px]';
  return (
    <div className=''>
      <InputLabel htmlFor={id} text={text} />
      <br />
      <input
        className={boxStyle}
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
