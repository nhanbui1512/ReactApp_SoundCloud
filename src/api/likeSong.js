import axiosClient from './axiosClient';

export async function LikeSong(songId) {
  try {
    const res = await axiosClient.post(`/song/like?song_id=${songId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function UnlikeSong(songId) {
  try {
    const res = await axiosClient.delete(`/song/unlike?song_id=${songId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
}
