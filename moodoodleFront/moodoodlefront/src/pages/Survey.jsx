import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import genre from '../constants/genre';
import GenreButton from '../components/GenreButton';
import CustomButton from '../components/CustomButton';

export default function Survey() {
  const [answers, setAnswers] = useState({ positive: [], negative: [] });
  const handleSelectedGenre = () => {};

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center w-[390px] h-screen bg-white gap-[28px]">
        <Link to="/start">
          <img src="/assets/moodoodleLogoMain.svg" alt="logo" />
        </Link>
        <div className="flex flex-col w-[283px] h-[73px] text-center">
          <p className="text-[16px] font-semibold">첫 번째 질문</p>
          <p className="text-[14px] font-semibold">
            [긍정]적인 감정일 때 어떤 장르의 음악을 듣나요?
            <br />
            (긍정 : 평온, 성취감, 행복, 열정)
          </p>
          <p className="text-darkGray text-[12px]">복수 선택 가능</p>
        </div>
        <div className="flex flex-col justify-between items-center w-[313px] h-[444px]">
          {genre.GENRE.map((v) => (
            <GenreButton genre={v} onClick />
          ))}
        </div>
        <CustomButton text="제출하기" color="purple" />
      </div>
    </div>
  );
}
