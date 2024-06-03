import React from 'react';
import useFriendSearch from '../hooks/useFriendSearch';

export default function SearchBar() {
  const { updateFriendID, search } = useFriendSearch();

  return (
    <div className='w-[338px] h-[39px] relative'>
      <div className='flex justify-around items-center w-[338px] h-[39px] rounded-[15px] bg-gray-scale-1 shadow-headerShadow'>
        <input
          className='w-[280px] text-[14px] text-left bg-gray-scale-1 text-gray-scale-3 outline-none'
          placeholder='친구의 아이디를 검색해보세요'
          onChange={updateFriendID}
        />
        <button onClick={() => search()}>
          <img src='/assets/search.svg' alt='search' />
        </button>
      </div>
    </div>
  );
}
