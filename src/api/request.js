import axios from 'axios';
const request = axios.create({
  baseURL: 'https://ancient-springs-85853-62c74127a4a9.herokuapp.com',
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
