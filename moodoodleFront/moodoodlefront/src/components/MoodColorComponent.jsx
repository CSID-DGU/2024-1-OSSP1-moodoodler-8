import React from 'react';
import colors from '../constants/colors';
import MoodHashTag from '../components/MoodHashTag';

export default function MoodColorComponent({ handleColorChipToggle }) {
  return (
    <div className='relative flex flex-col justify-center items-center w-[269px] h-[470px] gap-[26px] bg-white rounded-[20px]'>
      <div className='w-[217px] h-[45px] text-darkNavy font-semibold text-[23px] text-center border-b border-[#E4E5E7]'>
        Mood Color
      </div>
      <div className='flex flex-col justify-between items-center w-[203px] h-[340px]'>
        {colors &&
          colors.MOOD_LIST.map((id) => (
            <div className='flex flex-row items-center gap-[15px]' key={id.moodId}>
              <MoodHashTag mood_title={id.mood_name} mood_color={id.code} />
              <span className={`text-[13px] font-bold text-[#${id.code}]`}>#{id.code}</span>
            </div>
          ))}
      </div>
      <button className='absolute right-[15px] top-[15px]' type='button' onClick={handleColorChipToggle}>
        <img src='/assets/close.svg' alt='닫기' />
      </button>
    </div>
  );
}
