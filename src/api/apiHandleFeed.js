import axiosClient from './axiosClient';

const apiHandleFeed = {
  getAllSong() {
    const url = `/user/get-users?quantity=4`;
    return axiosClient.get(url);
  },
  getUser() {
    const url = `/user/get-users?quantity=4`;
    return axiosClient.get(url);
  },
  getLike(id) {
    const url = `/song/like?song_id=${id}`;
    return axiosClient.get(url);
  },
  followUser(id) {
    const url = `/follow?user_id=${id}`;
    return axiosClient.post(url);
  },
  getSongLiked() {
    const url = `/song/liked`;
    return axiosClient.get(url);
  }
};
export default apiHandleFeed;
