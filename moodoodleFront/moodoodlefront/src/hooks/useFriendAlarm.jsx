// 친구 신청 확인
import { useState } from 'react';
import { defaultAxios } from '../axios/defaultAxios';
import { useNavigate } from 'react-router-dom';

export default function useFriendAlarm() {
  const navigate = useNavigate();
  const [alarmList, setAlarmList] = useState([]);
  const [hasAlarm, setHasAlarm] = useState(true);

  const getAlarmList = async () => {
    try {
      console.log(alarmList);
      const friendAlarmResponse = await defaultAxios.get(`/friend/request/${localStorage.getItem('id')}/`, {
        params: { from_user_id: localStorage.getItem('id') },
      });
      const { result } = friendAlarmResponse.data;
      // 배열을 Map으로 변환
      const alarmMap = new Map();
      result.forEach((alarm) => {
        alarmMap.set(alarm.nickname, alarm);
        console.log(alarmMap);
      });
      setAlarmList(alarmMap);
      setHasAlarm(alarmMap.size > 0);
      console.log(friendAlarmResponse.data);
    } catch (error) {
      console.log(error.response.status);
    }
  };
  // 친구 신청 수락
  const RequestAccept = async ({ friend_id }) => {
    const postData = {
      from_user_id: localStorage.getItem('id'),
    };
    try {
      const friendAcceptResponse = await defaultAxios.post(
        `/friend/accept/${localStorage.getItem('id')}/${friend_id}/`,
        postData
      );
      console.log(friendAcceptResponse.data);
      // alert 사용해서 친구를 수락했습니다 띄우기 넣을 예정
      navigate(`/friend`);
    } catch (error) {
      const { status_code } = error.response.status_code;
      console.error('Error submitting post:', status_code);
    }
  };
  // 친구 신청 거부
  const RequestDeny = async ({ friend_id }) => {
    const postData = {
      to_user_id: localStorage.getItem('id'),
      from_user_id: friend_id,
    };
    try {
      const friendAcceptResponse = await defaultAxios.delete(
        `/friend/reject/${localStorage.getItem('id')}/${friend_id}/`,
        postData
      );
      console.log(friendAcceptResponse.data);
      // alert 사용해서 친구를 거절하시겠습니까? 재확인 넣을 예정
      navigate(`/friend`);
    } catch (error) {
      const { status_code } = error.response.status_code;
      console.error('Error submitting post:', status_code);
    }
  };

  return { alarmList, getAlarmList, RequestAccept, RequestDeny };
}
