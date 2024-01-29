import axiosClient from './axiosClient';

const apiHandleFeed = {
  getAllSong() {
    const url = `/user/get-users?quantity=4`;
    return axiosClient.get(url);
  },
};
export default apiHandleFeed;
