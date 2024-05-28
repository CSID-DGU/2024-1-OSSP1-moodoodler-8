import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import useMonthlyReport from '../hooks/useMonthlyReport';
import useProfile from '../hooks/useProfile';
import MoodHashTag from './MoodHashTag';
import MoodPieChart from './MoodPieChart';
import MoodColor from './MoodColor';

export default function MonthlyReport({
  isClick,
  handleReportComponent,
  selectedDate,
  setSelectedDate,
  handleColorChipToggle,
}) {
  const { mainColor, dataArray, monthlyReport, monthTagList, setDate } = useMonthlyReport({ selectedDate });

  const { profile, getUserProfile } = useProfile();

  const handlePrevMonth = () => {
    const newDate = dayjs(selectedDate).subtract(1, 'month').endOf('month').format('YYYY-MM-DD');
    setSelectedDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = dayjs(selectedDate).add(1, 'month').startOf('month').format('YYYY-MM-DD');
    setSelectedDate(newDate);
  };

  useEffect(() => {
    getUserProfile();
  }, [profile]);

  useEffect(() => {
    setDate({
      year: dayjs(selectedDate).format('YYYY'),
      month: dayjs(selectedDate).format('MM'),
    });
  }, [selectedDate, setDate]);

  return (
    <div className="flex w-[342px] h-[592px] justify-center items-center shadow-componentShadow">
      <div className="flex flex-col w-[342px] h-[548px] justify-between items-center">
        <div className="flex flex-row w-[283px] h-[24px] justify-start items-center gap-[95px]">
          <button type="button" onClick={handleReportComponent}>
            <img src="/assets/leftArrow.svg" alt="뒤로가기" className="w-[7px] h-[14px]" />
          </button>
          <p className="font-bold text-base text-darkNavy">월간 레포트</p>
        </div>
        <div className="flex flex-col w-[342px] h-[375px] items-center justify-between">
          <div className="flex flex-row justify-between items-center w-[284px] h-[19px]">
            <img
              src="/assets/leftArrow.svg"
              alt="leftArrow"
              className="w-[9px] h-[7px] cursor-pointer"
              onClick={handlePrevMonth}
            />
            <p className="text-[17px] font-semibold text-darkNavy">
              {dayjs(selectedDate).format('MMM')} {dayjs(selectedDate).format('YYYY')}
            </p>
            <img
              src="/assets/rightArrow.svg"
              alt="rightArrow"
              className="w-[9px] h-[7px] cursor-pointer"
              onClick={handleNextMonth}
            />
          </div>
          <div className="relative flex w-[342px] h-[300px] justify-center items-center">
            <MoodPieChart data={dataArray} />
            <button className="absolute right-[15px] bottom-[15px]" type="button" onClick={handleColorChipToggle}>
              <img src="/assets/more.svg" alt="컬러칩 보기" />
            </button>
          </div>
          <div className="flex flex-col w-[310px] h-[45px]">
            <div className="flex flex-row justify-between items-center">
              <img src="/assets/leftDQM.svg" alt="왼쪽큰따옴표" />
              <img src="/assets/rightDQM.svg" alt="오른쪽큰따옴표" />
            </div>
            <div className="text-center text-[13px] text-darkGray">
              [{profile.nickname}]님, 이번 달에는 행복한 일이 많으셨군요!
              <br />
              <span className={`text-[${mainColor.mood_color}]`}>[{mainColor.mood_name}]</span>이{' '}
              {mainColor.total_ratio}%를 차지하고 있어요~
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[268px] h-[99px] justify-between items-center">
          <p className="font-bold text-base text-darkNavy">이달의 태그</p>
          <div className="flex flex-row flex-wrap justify-center items-center gap-[10px]">
            {monthTagList.length > 0 &&
              monthTagList.map((tag, index) => (
                <MoodHashTag key={index} mood_title={tag.tag_name} mood_color={tag.tag_color} />
              ))}
          </div>
        </div>
      </div>
      {isClick ? <MoodColor handleColorChipToggle={handleColorChipToggle} /> : ''}
    </div>
  );
}
