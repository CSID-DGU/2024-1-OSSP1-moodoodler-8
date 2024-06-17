import axios from 'axios';

const defaultConfigure = {
  baseURL: process.env.REACT_APP_API_MACHINE_SERVER_URL,
};

axios.defaults.withCredentials = true;

const diaryAxios = axios.create(defaultConfigure);

export { diaryAxios };
