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
    // const formdata = new FormData();
    // formdata.append('song_id', songId);
    // formdata.append('content', content);
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
