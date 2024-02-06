import axiosClient from './axiosClient';

const apiHandlePlayList = {
  getPlayList(userId) {
    //var url = `/playlist/get-playlist-user?`;
    const url = `/playlist/get-playlist-user?idUser=${userId}`;
    return axiosClient.get(url);
  },
  getTrack(userId) {
    var url = `/user/get-profile`;
    if (userId) url = `/user?user_id=${userId}`;
    return axiosClient.get(url);
  },
  deteleTrack(songId) {
    const url = `/song?song_id=${songId}`;
    return axiosClient.delete(url);
  }
};
export default apiHandlePlayList;
