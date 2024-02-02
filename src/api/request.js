import axios from 'axios';
const request = axios.create({
  baseURL: 'https://f091-113-166-1-15.ngrok-free.app',
  headers: {
    'ngrok-skip-browser-warning': 'true',
  },
});

export const get = async (path, options = {}) => {
  const response = await request.get(path, options);
  return response.data;
};

export const post = async (path, options = {}) => {
  const response = await request.post(path, options);
  return response.data;
};

export default request;
