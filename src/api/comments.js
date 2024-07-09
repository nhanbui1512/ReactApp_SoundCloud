import axiosClient from './axiosClient';

export async function getCommentsOfSong(songId) {
  try {
    const res = await axiosClient.get(`/comments?song_id=${songId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function createComment(songId, content) {
  try {
    const res = await axiosClient.post(
      `/comments`,
      { song_id: songId, content: content },
      {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      },
    );
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function replyComment(content, songId, commentId) {
  try {
    const res = await axiosClient.post(
      `/comments`,
      { song_id: songId, content: content, comment_id: commentId },
      {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      },
    );
    return res.data;
  } catch (error) {
    throw error;
  }
}
