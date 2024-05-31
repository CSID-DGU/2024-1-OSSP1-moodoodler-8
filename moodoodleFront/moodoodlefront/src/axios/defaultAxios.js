import axios from 'axios';

const defaultConfigure = {
  baseURL: process.env.REACT_APP_API_SERVER_URL,
};

axios.defaults.withCredentials = true;

const defaultAxios = axios.create(defaultConfigure);

export { defaultAxios };
