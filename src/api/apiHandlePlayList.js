import axiosClient from './axiosClient';

const apiHandlePlayList = {
  getPlayList() {
    const url = `/playlist/getall?page=1&per_page=2`;
    return axiosClient.get(url);
  },
};
export default apiHandlePlayList;
