import { toast } from 'react-toastify';
import axiosClient from './axiosClient';

export async function signIn(email, password) {
  try {
    const formdata = new FormData();
    formdata.append('email', email);
    formdata.append('password', password);
    const response = await axiosClient.post(`/login`, formdata);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function registerUser({ username, email, password }) {
  try {
    var urlencoded = new URLSearchParams();
    urlencoded.append('userName', username);
    urlencoded.append('email', email);
    urlencoded.append('password', password);
    const response = await axiosClient.post(`/user/register`, urlencoded, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function changePassword({ currentPassword, newPassword, confirmPassword }) {
  try {
    var urlencoded = new URLSearchParams();
    urlencoded.append('ownPassWord', currentPassword);
    urlencoded.append('newPassWord', newPassword);
    urlencoded.append('confirmPassWord', confirmPassword);
    const response = await axiosClient.put(`/user/change-password`, urlencoded, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    toast.success('Update sucess');
    return response.data;
  } catch (error) {
    toast.error('Old password is incorrect');
    console.log(error);
  }
}
//==========================================================================================
// Profile

// get user profile by access token
export async function getCurrentUserProfile() {
  try {
    const response = await axiosClient.get(`/user/get-profile`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getUsersById(id) {
  try {
    const response = await axiosClient.get(`/user?user_id=${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getUsersByName(name) {
  try {
    const response = await axiosClient.get(`/user/search?value=${name}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function updateUserDetails({
  username = '',
  city = '',
  country = '',
  bio = '',
  avatar = '',
}) {
  try {
    if (username === '' && city === '' && country === '' && bio === '' && avatar === '') {
      return null;
    } else {
      const formdata = new FormData();
      username !== '' && formdata.append('userName', username);
      city !== '' && formdata.append('city', city);
      country !== '' && formdata.append('country', country);
      bio !== '' && formdata.append('bio', bio);
      avatar !== '' && formdata.append('avatar', avatar);
      const response = await axiosClient.put(`/user/update`, formdata);
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
}
