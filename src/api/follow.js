import axiosClient from "./axiosClient";

export async function getFollowing() {
    try {
        const response = await axiosClient.get(`/follow/following`);
        // console.log(response);
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export async function getFollowers() {
    try {
        const response = await axiosClient.get(`/follow/followers`);
        // console.log(response);
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export async function followUser(id) {
    try {
        const response = await axiosClient.post(`/follow?user_id=${id}`);
        // console.log(response);
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export async function unfollowUser(id) {
    try {
        const response = await axiosClient.delete(`/follow?user_id=${id}`);
        // console.log(response);
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export async function followPlaylist(id) {
    try {
        const response = await axiosClient.post(`/follow/playlists?idPlaylist=${id}`);
        // console.log(response);
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export async function unfollowPlaylist(id) {
    try {
        const response = await axiosClient.delete(`/follow/playlists?idPlaylist=${id}`);
        // console.log(response);
        return response.data
    } catch (error) {
        console.log(error)
    }
}