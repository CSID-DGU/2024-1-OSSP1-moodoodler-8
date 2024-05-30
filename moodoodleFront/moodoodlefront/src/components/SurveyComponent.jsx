import React, { useEffect, useState } from 'react';
import genres from '../constants/genres';
import GenreButton from '../components/GenreButton';
import CustomButton from '../components/CustomButton';

const detailMood = {
  긍정: '긍정 : 행복, 중립',
  부정: '부정 : 분노, 놀람, 공포, 혐오, 슬픔',
};

const buttonText = {
  긍정: '제출하기',
  부정: '제출 및 회원가입',
};

export default function SurveyComponent({ title, direction, answers, setAnswers, handleSubmit }) {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedGenreId, setSelectedId] = useState([]);

  const onClickHandleSubmit = () => {
    handleSubmit();
    setSelectedId([null]);
  };

  useEffect(() => {
    if (selectedGenre !== '') {
      setAnswers([...answers, selectedGenre]);
      console.log(answers);
    }
  }, [selectedGenre]);

  return (
    <div className='flex flex-col justify-center items-center w-[338px] h-[660px] rounded-[30px] bg-white gap-[28px] shadow-componentShadow'>
      <div className='flex flex-col w-[283px] h-[73px] text-center'>
        <p className='text-[16px] font-semibold'>{title}</p>
        <p className='text-[14px] font-semibold'>
          [{direction}]적인 감정일 때 어떤 장르의 음악을 듣나요?
          <br />({detailMood[direction]})
        </p>
        <p className='text-darkGray text-[12px]'>복수 선택 가능</p>
      </div>
      <div className='flex flex-col justify-between items-center w-[313px] h-[444px]'>
        {genres.GENRE.map((genre) => (
          <GenreButton
            key={genre.id}
            genre={genre.name}
            isClick={selectedGenreId.includes(genre.id) ? 'border' : ''}
            onClick={() => {
              setSelectedGenre(genre.name);
              setSelectedId([...selectedGenreId, genre.id]);
            }}
          />
        ))}
      </div>
      <CustomButton
        text={buttonText[direction]}
        color='purple'
        disabled={answers.length > 0 ? false : true}
        onClick={() => onClickHandleSubmit()}
      />
    </div>
  );
}
