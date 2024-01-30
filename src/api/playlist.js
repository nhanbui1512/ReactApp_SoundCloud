import axiosClient from "./axiosClient";

export async function createPlaylist(name, listOfSongsId) {
    try {
        const json = {
            name: name,
            idSongs: listOfSongsId
        }
        const response = await axiosClient.post(`/playlist/create`, JSON.stringify(json), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // console.log(response);
        return response.data
    } catch (error) {
        throw error
    }
}

export async function addSongsToPlaylist(playlistId, playlistName, listOfSongsId) {
    try {
        if (listOfSongsId.length === 0) {
            return null
        }
        const json = {
            name: playlistName,
            idSongs: listOfSongsId
        }
        const response = await axiosClient.post(`/playlist/add-songs?idPlaylist=${playlistId}`, JSON.stringify(json), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // console.log(response);
        return response.data
    } catch (error) {
        throw error
    }
}

export async function removeSongsFromPlaylist(playlistId, listOfSongsId) {
    try {
        if (listOfSongsId.length === 0) {
            return null
        }
        const json = {
            idSongs: listOfSongsId
        }
        const response = await axiosClient.delete(`/playlist/remove-songs?idPlaylist=${playlistId}`, {
            data: JSON.stringify(json),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // console.log(response);
        return response.data
    } catch (error) {
        throw error
    }
}

export async function getPlaylists(page = 1, perPage = 10) {
    try {
        const response = await axiosClient.get(`/playlist/getall?page=${page}&per_page=${perPage}`);
        // console.log(response);
        return response.data
    } catch (error) {
        throw error
    }
}

export async function getPlaylistsById(id) {
    try {
        const response = await axiosClient.get(`/playlist?idPlaylist=${id}`);
        // console.log(response);
        return response.data
    } catch (error) {
        throw error
    }
}

// same API endpoint with getSongsByName
export async function getPlaylistsByName(name) {
    try {
        const response = await axiosClient.get(`/song/search?value=${name}`);
        // console.log(response);
        return response.data
    } catch (error) {
        throw error
    }
}

export async function getPlaylistsByUserId(userId) {
    try {
        const response = await axiosClient.get(`/playlist/get-playlist-user?idUser=${userId}`);
        // console.log(response);
        return response.data
    } catch (error) {
        throw error
    }
}

// get current user's following playlist
export async function getMyFollowingPlaylist() {
    try {
        const response = await axiosClient.get(`/playlist/follow-playlists`);
        // console.log(response);
        return response.data
    } catch (error) {
        throw error
    }
}

export async function deletePlaylist(id) {
    try {
        const response = await axiosClient.delete(`/playlist?idPlaylist=${id}`)
        // console.log(response);
        return response.data
    } catch (error) {
        throw error
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
        throw error
    }
}