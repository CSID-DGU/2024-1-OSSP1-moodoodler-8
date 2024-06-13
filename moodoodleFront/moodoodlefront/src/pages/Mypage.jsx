import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileCol from '../components/ProfileCol';
import MypageMenu from '../components/MypageMenu';
import ProfileManagement from '../components/ProfileManagement';
import MonthlyReport from '../components/MonthlyReport';
import useLogout from '../hooks/useLogout';
import dayjs from 'dayjs';
import CancelModal from '../components/CancelModal';

export default function Mypage() {
  const [isClick, setIsClick] = useState(false);
  const [isClickedReport, setIsClickedReport] = useState(false);
  const [isClickedProfile, setIsClickedProfile] = useState(false);
  const [isClickCancel, setIsClickCancel] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dayjs().format('YYYY-MM-DD'));
  const { logout } = useLogout();

  function handleReportComponent() {
    setIsClickedReport((prev) => !prev);
  }

  function handleProfileComponent() {
    setIsClickedProfile((prev) => !prev);
  }

  function handleColorChipToggle() {
    setIsClick((prev) => !prev);
  }

  function handleCancelModal() {
    setIsClickCancel((prev) => !prev);
  }

  return (
    <div>
      <div className='flex flex-col justify-center items-center gap-[12px]'>
        {isClickCancel ? <CancelModal onClick={handleCancelModal} /> : ''}
        {isClickedProfile ? (
          <ProfileManagement handleProfileComponent={handleProfileComponent} />
        ) : isClickedReport ? (
          <MonthlyReport
            isClick={isClick}
            handleReportComponent={handleReportComponent}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            handleColorChipToggle={handleColorChipToggle}
          />
        ) : (
          <>
            <ProfileCol />
            <MypageMenu
              handleReportComponent={handleReportComponent}
              handleProfileComponent={handleProfileComponent}
              handleLogout={logout}
            />
            <div className='w-[342px] flex gap-[14px] justify-end text-[10px] text-darkGray bottom-[20px]'>
              <Link to='/privacypolicy'>
                <p>개인정보 처리방침</p>
              </Link>
              <button type='button' onClick={handleCancelModal}>
                탈퇴하기
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
