import { defaultAxios } from '../axios/defaultAxios';

export default function useSurvey() {
  const postPositiveSurveyAnswers = async (positives) => {
    try {
      const postPositiveSurveyAnswersResponse = await defaultAxios.post(`/user/survey/positive/`, {
        id: localStorage.getItem('id'),
        question: 'positive',
        answer: positives,
      });
      console.log(postPositiveSurveyAnswersResponse.status_code);
    } catch (error) {
      const { status_code } = error.response.data.status_code;
      console.error('Error submitting answers:', status_code);
    }
  };

  const postNegativeSurveyAnswers = async (negatives) => {
    try {
      const postNegativeSurveyAnswersResponse = await defaultAxios.post(`/user/survey/negative/`, {
        id: localStorage.getItem('id'),
        question: 'negative',
        answer: negatives,
      });
      console.log(postNegativeSurveyAnswersResponse.status_code);
    } catch (error) {
      const { status_code } = error.response.status_code;
      console.error('Error submitting answers:', status_code);
    }
  };

  return { postPositiveSurveyAnswers, postNegativeSurveyAnswers };
}
