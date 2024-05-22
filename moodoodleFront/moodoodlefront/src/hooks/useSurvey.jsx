import { defaultAxios } from '../axios/defaultAxios';

export default function useSurvey() {
  const postSurveyAnswers = async (positives, negatives) => {
    try {
      const postSurveyAnswersResponse = await defaultAxios.post('/user/survey/', {
        id: localStorage.getItem('id'),
        positive_answer: positives,
        negative_answer: negatives,
      });
      console.log(postSurveyAnswersResponse.data.status_code);
    } catch (error) {
      const { status_code } = error.response.data.status_code;
      console.error('Error submitting answers:', status_code);
    }
  };

  return { postSurveyAnswers };
}
