// 친구 신청 확인
import { useEffect, useState } from 'react';
import { defaultAxios } from '../axios/defaultAxios';

export default function useFriendAlarm() {
  const [alarmList, setAlarmList] = useState([]);
  const [hasAlarm, setHasAlarm] = useState();

  const getAlarmList = async () => {
    try {
      const friendAlarmResponse = await defaultAxios.get(`/friend/request/${localStorage.getItem('id')}/`, {
        params: { from_user_id: localStorage.getItem('id') },
      });
      const { result } = friendAlarmResponse.data;
      // 배열을 Map으로 변환
      const alarmMap = new Map();
      result.forEach((alarm) => {
        alarmMap.set(alarm.id, alarm);
      });
      setAlarmList(alarmMap);
      setHasAlarm(alarmMap.size > 0);
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
      getAlarmList();
      setHasAlarm(alarmList.size > 0);
    } catch (error) {
      const { status_code } = error.response.status;
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
      const friendDenyResponse = await defaultAxios.delete(
        `/friend/reject/${localStorage.getItem('id')}/${friend_id}/`,
        postData
      );
      getAlarmList();
      setHasAlarm(alarmList.size > 0);
    } catch (error) {
      const { status_code } = error.response.status;
      console.error('Error submitting post:', status_code);
    }
  };

  useEffect(() => {
    getAlarmList();
  }, []);

  return { alarmList, getAlarmList, hasAlarm, setHasAlarm, RequestAccept, RequestDeny };
}
