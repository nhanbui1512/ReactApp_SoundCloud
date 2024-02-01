import axios from 'axios';
const request = axios.create({
  baseURL: 'http://localhost:3000',
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
