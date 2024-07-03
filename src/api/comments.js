import axiosClient from './axiosClient';

export async function getCommentsOfSong(songId) {
  try {
    const res = await axiosClient.get(`/comments?song_id=${songId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
}
