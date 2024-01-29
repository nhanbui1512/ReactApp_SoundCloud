import axiosClient from "./axiosClient";

// to do: removeSongsFromPlaylist

export async function createPlaylist(name, listOfSongsId = []) {
    try {
        const json = {
            name: name,
            idSongs: listOfSongsId
        }
        const response = await axiosClient.post(`/playlist/create`, json);
        // console.log(response);
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export async function addSongsToPlaylist(playlistId, listOfSongsId = []) {
    try {
        if (listOfSongsId.length === 0) {
            return null
        }
        const json = {
            idSongs: listOfSongsId
        }
        const response = await axiosClient.post(`/playlist/add-songs?idPlaylist=${playlistId}`, json);
        // console.log(response);
        return response.data
    } catch (error) {
        console.log(error);
    }
}

// to do
//export async function removeSongsFromPlaylist() {}

export async function getPlaylists(page = 1, perPage = 10) {
    try {
        const response = await axiosClient.get(`/playlist/getall?page=${page}&per_page=${perPage}`);
        // console.log(response);
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export async function getPlaylistsById(id) {
    try {
        const response = await axiosClient.get(`/playlist?idPlaylist=${id}`);
        // console.log(response);
        return response.data
    } catch (error) {
        console.log(error);
    }
}

// same API endpoint with getSongsByName
export async function getPlaylistsByName(name) {
    try {
        const response = await axiosClient.get(`/song/search?value=${name}`);
        // console.log(response);
        return response.data
    } catch (error) {
        console.log(error);
    }
}

// get current user's following playlist
export async function getMyFollowingPlaylist() {
    try {
        const response = await axiosClient.get(`/playlist/follow-playlists`);
        // console.log(response);
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export async function deletePlaylist(id) {
    try {
        const response = await axiosClient.delete(`/playlist?idPlaylist=${id}`)
        // console.log(response);
        return response.data
    } catch (error) {
        console.log(error)
    }
}

//==========================================================================================

// get list of users, whose following the playlist
export async function getUsersFollowingPlaylist(playlistId) {
    try {
        const response = await axiosClient.get(`/playlist/playlist-followed?idPlaylist=${playlistId}`);
        // console.log(response);
        return response.data
    } catch (error) {
        console.log(error);
    }
}