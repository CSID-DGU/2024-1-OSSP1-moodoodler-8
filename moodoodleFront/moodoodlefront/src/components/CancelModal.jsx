import React, { useEffect } from 'react';
import useProfile from '../hooks/useProfile';
import useCancel from '../hooks/useCancel';

export default function CancelModal({ onClick }) {
  const { profile, getUserProfile } = useProfile();
  const { cancel } = useCancel();

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <div className='fixed inset-0 flex justify-center items-center bg-outlineGray bg-opacity-50'>
      <div className='relative w-[297px] h-[280px] flex justify-center items-center rounded-[20px] shadow-ComponentShadow bg-white'>
        <div className='flex flex-col w-[214px] h-[183px] justify-between items-center'>
          <div className='flex flex-col w-[214px] h-[120px] justify-between items-start'>
            <p className='font-extrabold text-[16px]'>
              {profile.nickname}님,
              <br />
              탈퇴하시겠습니까?
            </p>
            <p className='font-extrabold text-[14px]'>MOODOODLE 탈퇴 전 확인하세요!</p>
            <p className='font-regular text-[12px]'>
              탈퇴하시면 이용 중인
              <br />
              모든 데이터는 복구가 불가능합니다
            </p>
          </div>
          <button
            type='button'
            onClick={() => {
              cancel();
              onClick();
            }}
            className='w-[116px] h-[28px] bg-[#AAC6ED]/40 rounded-[10px] text-[13px] font-semibold'>
            탈퇴하기
          </button>
        </div>
        <button type='button' onClick={onClick} className='absolute top-[19px] right-[22px]'>
          <img src='/assets/close.svg' alt='닫기' />
        </button>
      </div>
    </div>
  );
}
