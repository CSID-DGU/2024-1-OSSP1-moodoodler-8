import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const navigate = useNavigate();
  const [friendID, setFriendID] = useState('');

  const handleSetID = (e) => {
    setFriendID(e.target.value);
  };
  const handleSubmit = () => {
    navigate('/search');
  };

  return (
    <div className='w-[338px] h-[39px] relative'>
      <div className='flex justify-around items-center w-[338px] h-[39px] rounded-[15px] bg-gray-scale-1/[0.66] shadow-headerShadow'>
        <input
          className='w-[280px] text-[14px] bg-gray-scale-1/[0.66] text-left text-gray-scale-3'
          placeholder='친구의 아이디를 검색해보세요'
          onChange={(e) => handleSetID(e)}
        />
        <button onClick={handleSubmit}>
          <img src='/assets/search.svg' alt='search' />
        </button>
      </div>
    </div>
  );
}
