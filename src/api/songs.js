import axiosClient from './axiosClient';

// to do: getSongsByGenre

export async function createSong({
  songName,
  description,
  artistName,
  audioFile,
  imageFile,
  genreId,
  onProgress,
}) {
  try {
    const formdata = new FormData();
    formdata.append('name', songName);
    formdata.append('description', description);
    formdata.append('artistName', artistName);
    formdata.append('song', audioFile);
    formdata.append('thumbNail', imageFile);
    formdata.append('genreId', genreId);
    const response = await axiosClient.post(`/song/create`, formdata, {
      onUploadProgress: (progressEvent) => {
        if (onProgress) return onProgress(progressEvent);
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getSongs(page = 1, perPage = 10) {
  try {
    const response = await axiosClient.get(`/song/get-songs?page=${page}&per_page=${perPage}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getSongsLiked() {
  try {
    const response = await axiosClient.get(`/song/liked`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getSongById(id) {
  try {
    const response = await axiosClient.get(`/song/getsong?song_id=${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// same API endpoint with getPlaylistsByName
export async function getSongsByName(name) {
  try {
    const response = await axiosClient.get(`/song/search?value=${name}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// to do
/* export async function getSongsByGenre(genreId) {} */

export async function deleteSong(id) {
  try {
    const response = await axiosClient.delete(`/song?song_id=${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

//==========================================================================================
// Like/Unlike songs

export async function likeSong(id) {
  try {
    const response = await axiosClient.post(`/song/like?song_id=${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function unlikeSong(id) {
  try {
    const response = await axiosClient.delete(`/song/unlike?song_id=${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

//==========================================================================================
// Song's listen count

// listen count ++
export async function increaseListenCount(songId) {
  try {
    const response = await axiosClient.post(`/listen?song_id=${songId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function increaseLoopCount(songId) {
  try {
    const response = await axiosClient.post(`/loop?song_id=${songId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function recommendSongs() {
  try {
    const response = await axiosClient.get('/song/recommend');
    return response.data;
  } catch (error) {
    throw error;
  }
}
