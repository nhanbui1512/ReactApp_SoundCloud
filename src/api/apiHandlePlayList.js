import axiosClient from './axiosClient';

const apiHandlePlayList = {
  getPlayList(userId) {
    var url = `/playlist/get-playlist-user`;
    if (userId) url = `/playlist/get-playlist-user?idUser=${userId}`;
    return axiosClient.get(url);
  },
  getTrack(userId) {
    var url = `/user/get-profile`;
    if (userId) url = `/user?user_id=${userId}`;
    return axiosClient.get(url);
  },
};
export default apiHandlePlayList;
