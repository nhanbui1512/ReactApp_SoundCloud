import axiosClient from './axiosClient';

const apiHandlePlayList = {
  getPlayList() {
    const url = `/playlist/get-playlist-user`;
    return axiosClient.get(url);
  },
  getTrack() {
    const url = `/user/get-profile`;
    return axiosClient.get(url);
  }
};
export default apiHandlePlayList;
