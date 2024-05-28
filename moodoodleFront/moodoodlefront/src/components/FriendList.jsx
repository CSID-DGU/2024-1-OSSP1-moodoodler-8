import React, { useEffect, useState } from 'react';
import useFriendProfile from '../hooks/useFriendProfile';
import FriendProfile from '../components/FriendProfile';
import Dropdown from './Dropdown';
import useDetectClose from '../hooks/useDetectClose';

export default function FriendList() {
  const { friendList, getFriendList, handleDeleteFriend, isDelete, setIsDelete } = useFriendProfile();
  const [isOpen, ref, toggleDropdown] = useDetectClose(false);

  useEffect(() => {
    getFriendList();
  }, []);

  const handleDelete = (to_user_id) => {
    if (window.confirm('삭제하시겠습니까?')) {
      handleDeleteFriend(to_user_id);
    }
  };

  return (
    <div className='flex flex-col items-center w-[342px] h-[619px] relative gap-[20px] rounded-[20px] bg-white shadow-componentShadow'>
      <div className='flex justify-between w-[300px] h-[40px]'>
        <p className='self-end font-bold text-center text-darkNavy w-full'>친구 목록</p>
        <div className='self-end cursor-pointer' onClick={toggleDropdown} ref={ref}>
          <img src='/assets/moreline.svg' alt='more' />
          {isOpen && <Dropdown setIsDelete={setIsDelete} />}
        </div>
      </div>
      <div className='flex flex-col gap-[5px]'>
        {Array.from(friendList.values()).map((friend) => (
          /* 삭제가 활성화되었는가 아닌가를 확인 */
          <FriendProfile
            key={friend.nickname}
            nickname={friend.nickname}
            description={friend.description}
            src2={isDelete ? '/assets/trash.svg' : '/assets/calendar.svg'}
            alt2={isDelete ? 'delete' : 'calendar'}
            onClick2={isDelete ? () => handleDelete(friend.id) : () => {}}
          />
        ))}
      </div>
    </div>
  );
}
