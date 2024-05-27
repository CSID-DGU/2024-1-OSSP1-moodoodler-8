import { defaultAxios } from '../axios/defaultAxios';

export default function useSurvey() {
  const postPositiveSurveyAnswers = async (positives) => {
    try {
      const postPositiveSurveyAnswersResponse = await defaultAxios.post(`/user/survey/positive/`, {
        id: localStorage.getItem('id'),
        question: 'positive',
        answer: positives,
      });
      console.log(postPositiveSurveyAnswersResponse);
    } catch (error) {
      console.error('Error submitting answers:', error.response);
    }
  };

  const postNegativeSurveyAnswers = async (negatives) => {
    try {
      const postNegativeSurveyAnswersResponse = await defaultAxios.post(`/user/survey/negative/`, {
        id: localStorage.getItem('id'),
        question: 'negative',
        answer: negatives,
      });
      console.log(postNegativeSurveyAnswersResponse);
    } catch (error) {
      console.error('Error submitting answers:', error.response);
    }
  };

  return { postPositiveSurveyAnswers, postNegativeSurveyAnswers };
}
