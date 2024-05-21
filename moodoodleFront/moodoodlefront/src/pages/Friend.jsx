import React from 'react';
import SearchBar from '../components/SearchBar';
import FriendList from '../components/FriendList';

export default function Friend() {
  return (
    <div>
      <div className='flex flex-col justify-center items-center gap-[15px]'>
        <SearchBar />
        <FriendList />
      </div>
    </div>
  );
}
