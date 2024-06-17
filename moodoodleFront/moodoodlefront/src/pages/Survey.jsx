import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SurveyComponent from '../components/SurveyComponent';
import useSurvey from '../hooks/useSurvey';

export default function Survey() {
  const navigate = useNavigate();
  const [isFirstStep, setIsFirstStep] = useState(true);
  const [positives, setPositives] = useState([]);
  const [negatives, setNegatives] = useState([]);
  const { postPositiveSurveyAnswers, postNegativeSurveyAnswers } = useSurvey();

  const handleFirstStepSubmit = () => {
    setIsFirstStep((prev) => !prev);
    console.log(positives);
    postPositiveSurveyAnswers(positives);
  };

  const handleFinalStepSubmit = () => {
    setIsFirstStep((prev) => !prev);
    postNegativeSurveyAnswers(negatives);
    console.log(negatives);
    setPositives([]);
    setNegatives([]);
    navigate('/login');
  };

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className='flex flex-col justify-center items-center w-[390px] h-screen bg-white gap-[28px]'>
        <Link to='/'>
          <img src='/assets/moodoodleLogo_bg.svg' alt='logo' />
        </Link>
        {isFirstStep ? (
          <SurveyComponent
            title='첫 번째 질문'
            direction='긍정'
            answers={positives}
            setAnswers={setPositives}
            handleSubmit={handleFirstStepSubmit}
          />
        ) : (
          <SurveyComponent
            title='두 번째 질문'
            direction='부정'
            answers={negatives}
            setAnswers={setNegatives}
            handleSubmit={handleFinalStepSubmit}
          />
        )}
      </div>
    </div>
  );
}
