import React from 'react';
import colors from '../constants/colors';
import MoodHashTag from '../components/MoodHashTag';

export default function MoodColorComponent({ handleColorChipToggle }) {
  return (
    <div className='relative flex flex-col justify-center items-center w-[280px] h-[421px] gap-[26px] bg-white rounded-[20px]'>
      <div className='w-[217px] h-[45px] text-darkNavy font-semibold text-[23px] text-center border-b border-[#E4E5E7]'>
        Mood Color
      </div>
      <div className='flex flex-col justify-between items-center w-[192px] h-[289px]'>
        {colors &&
          colors.MOOD_LIST.map((id) => (
            <div className='flex flex-row w-[192px] h-[32px] items-center' key={id.moodId}>
              <div className='flex flex-row w-[192px] justify-center gap-[31px]'>
                <span className='text-[14px] font-medium'>{id.mood_name}</span>
                <MoodHashTag mood_title={id.code} mood_color={id.code} />
              </div>
            </div>
          ))}
      </div>
      <button className='absolute right-[15px] top-[15px]' type='button' onClick={handleColorChipToggle}>
        <img src='/assets/close.svg' alt='닫기' />
      </button>
    </div>
  );
}
