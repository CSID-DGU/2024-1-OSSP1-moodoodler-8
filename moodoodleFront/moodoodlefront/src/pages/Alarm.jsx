import React, { useEffect, useState } from 'react';
import useFriendAlarm from '../hooks/useFriendAlarm';
import FriendProfile from '../components/FriendProfile';

export default function Alarm() {
  const { alarmList, getAlarmList, RequestAccept, RequestDeny } = useFriendAlarm();

  useEffect(() => {
    getAlarmList();
  }, [getAlarmList]);

  const handleAcceptClick = (friendId) => {
    RequestAccept({ friend_id: friendId });
  };
  const handleDenyClick = (friendId) => {
    RequestDeny({ friend_id: friendId });
  };

  return (
    <div className='flex flex-col justify-center items-center gap-[30px] rounded-[20px] bg-white shadow-componentShadow'>
      <div className='flex flex-col items-center w-[200px] h-[619px] relative gap-[20px]'>
        <div className='flex justify-between h-[40px]'>
          <p className='self-end font-bold text-center text-darkNavy w-full'>친구 신청</p>
        </div>
        <div className='flex flex-col gap-[5px]'>
          {/* 임시로 확인하려고 적어놓은 것. 추후 잘 작동되면 삭제 */}
          <FriendProfile
            nickname='testfriend'
            description='테스트용 칭구!!!!!!!!!!!!!'
            src1='/assets/accept.svg'
            alt1='accept'
            onClick1={() => handleAcceptClick('testfriend')}
            src2='assets/deny.svg'
            alt2='deny'
            onClick2={() => handleDenyClick('testfriend')}
          />
          {Array.from(alarmList.values()).map((friend) => (
            <FriendProfile
              nickname={friend.nickname}
              description={friend.description}
              src1='/assets/accept.svg'
              alt1='accept'
              onClick1={() => handleAcceptClick(friend.id)}
              src2='assets/deny.svg'
              alt2='deny'
              onClick2={() => handleDenyClick(friend.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
