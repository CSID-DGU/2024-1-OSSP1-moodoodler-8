import React from 'react';
import FriendAlarmList from '../components/FriendAlarmList';

export default function Alarm() {
  return (
    <div className='flex flex-col justify-center items-center gap-[30px] rounded-[20px] bg-white shadow-componentShadow'>
      <FriendAlarmList />
    </div>
  );
}
