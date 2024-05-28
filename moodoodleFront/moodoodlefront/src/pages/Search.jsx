import React from 'react';
import SearchBar from '../components/SearchBar';
import FriendSearch from '../components/FriendSearch';

export default function Search() {
  return (
    <div>
      <div className='flex flex-col justify-center items-center gap-[15px]'>
        <SearchBar />
        <FriendSearch />
      </div>
    </div>
  );
}
