import request from './request';

export async function CheckLogin({ email, password }) {
  try {
    const result = await request.post('/auth/login', { email: email, password: password });
    return result.data;
  } catch (error) {
    throw error;
  }
}
