import React, { useEffect } from 'react';
import useFriendProfile from '../hooks/useFriendProfile';
import FriendProfile from '../components/FriendProfile';

export default function FriendList() {
  const { friendList, getFriendList } = useFriendProfile();

  useEffect(() => {
    getFriendList();
  }, [getFriendList]);

  return (
    <div className='flex flex-col items-center w-[342px] h-[619px] relative gap-[20px] rounded-[20px] bg-white shadow-componentShadow'>
      <div className='flex justify-between w-[300px] h-[40px]'>
        <p className='self-end font-bold text-center text-darkNavy w-full'>친구 목록</p>
        <button className='self-end'>
          <img src='/assets/moreline.svg' alt='more' />
        </button>
      </div>
      <div className='flex flex-col gap-[5px]'>
        {Array.from(friendList.values()).map((friend) => (
          <FriendProfile
            key={friend.nickname}
            img={friend.profile_image}
            nickname={friend.nickname}
            description={friend.description}
            src2='/assets/calendar.svg'
            alt2='calendar'
          />
        ))}
      </div>
    </div>
  );
}
