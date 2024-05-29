import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import FriendProfile from '../components/FriendProfile';
import FriendCalendar from '../components/FriendCalendar';
import Dropdown from './Dropdown';
import useDetectClose from '../hooks/useDetectClose';
import useFriendProfile from '../hooks/useFriendProfile';

export default function FriendList() {
  const { friendList, getFriendList, handleDeleteFriend, hasFriend, isDelete, setIsDelete } = useFriendProfile();
  const [isOpen, ref, toggleDropdown] = useDetectClose(false);
  const context = useOutletContext();

  useEffect(() => {
    getFriendList();
  }, []);

  const handleDelete = (to_user_id) => {
    if (window.confirm('삭제하시겠습니까?')) {
      handleDeleteFriend(to_user_id);
    }
  };

  const handleCalendar = (to_user) => {
    <FriendCalendar
      handleColorChipToggle={context.handleColorChipToggle}
      selectedDate={context.selectedDate}
      setSelectedDate={context.setSelectedDate}
      to_user={to_user}
    />;
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
        {hasFriend ? (
          Array.from(friendList.values()).map((friend) => (
            <FriendProfile
              key={friend.id} // 고유한 key prop 추가
              nickname={friend.nickname}
              description={friend.description}
              src2={isDelete ? '/assets/frienddelete.svg' : '/assets/calendar.svg'}
              alt2={isDelete ? 'delete' : 'calendar'}
              onClick2={isDelete ? () => handleDelete(friend.id) : () => handleCalendar(friend)}
            />
          ))
        ) : (
          <p className='text-sm font-semibold text-center text-darkgray'>친구 결과 없음</p>
        )}
      </div>
    </div>
  );
}
