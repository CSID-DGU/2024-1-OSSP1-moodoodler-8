import React, { useEffect, useState } from 'react';
import { defaultAxios } from '../axios/defaultAxios';
import { useNavigate } from 'react-router-dom';
import useFriendRequest from '../hooks/useFriendRequest';
import FriendProfile from '../components/FriendProfile';

export default function Alarm() {
  const { friendreqList, getFriendReqList } = useFriendRequest();
  const navigate = useNavigate();

  useEffect(() => {
    getFriendReqList();
  }, [getFriendReqList]);

  const handleAcceptClick = (friendId) => {
    RequestAccept({ friend_id: friendId });
  };
  const handleDenyClick = (friendId) => {
    RequestDeny({ friend_id: friendId });
  };
  // 나중에 저 둘은 hook use에 옮겨놔야겠다
  const RequestAccept = async ({ friend_id }) => {
    const postData = {
      from_user_id: localStorage.getItem('id'),
    };
    try {
      const friendAcceptResponse = await defaultAxios.post(`/friend/accept/${friend_id}`, postData);
      console.log(friendAcceptResponse.data);
      // alert 사용해서 친구를 수락했습니다 띄우기 넣을 예정
      navigate(`/friend`);
    } catch (error) {
      const { status_code } = error.response.status_code;
      console.error('Error submitting post:', status_code);
    }
  };
  const RequestDeny = async ({ friend_id }) => {
    const postData = {
      from_user_id: localStorage.getItem('id'),
    };
    try {
      const friendAcceptResponse = await defaultAxios.post(`/friend/deny/${friend_id}`, postData);
      console.log(friendAcceptResponse.data);
      // alert 사용해서 친구를 거절하시겠습니까? 재확인 넣을 예정
      navigate(`/friend`);
    } catch (error) {
      // const { status_code } = error.response.status_code;
      // console.error('Error submitting post:', status_code);
    }
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
          {Array.from(friendreqList.values()).map((friend) => (
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
