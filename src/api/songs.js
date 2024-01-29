import axiosClient from "./axiosClient";

// to do: getSongsByGenre

export async function createSong({songName, description, artistName, audioFile, imageFile, genreId}) {
    try {
        const formdata = new FormData()
        formdata.append('name', songName)
        formdata.append('description', description)
        formdata.append('artistName', artistName)
        formdata.append('song', audioFile)
        formdata.append('thumbNail', imageFile)
        formdata.append('genreId', genreId)
        const response = await axiosClient.post(`/song/create`, formdata);
        // console.log(response);
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export async function getSongs(page = 1, perPage = 10) {
    try {
        const response = await axiosClient.get(`/song/get-songs?page=${page}&per_page=${perPage}`);
        // console.log(response);
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export async function getSongsById(id) {
    try {
        const response = await axiosClient.get(`/song/getsong?song_id=${id}`);
        // console.log(response);
        return response.data
    } catch (error) {
        console.log(error);
    }
}

// same API endpoint with getPlaylistsByName
export async function getSongsByName(name) {
    try {
        const response = await axiosClient.get(`/song/search?value=${name}`);
        // console.log(response);
        return response.data
    } catch (error) {
        console.log(error);
    }
}

// to do
/* export async function getSongsByGenre(genreId) {} */

export async function deleteSong(id) {
    try {
        const response = await axiosClient.delete(`/song?song_id=${id}`)
        // console.log(response);
        return response.data
    } catch (error) {
        console.log(error)
    }
}

//==========================================================================================
// Like/Unlike songs

export async function likeSong(id) {
    try {
        const response = await axiosClient.post(`/song/like?song_id=${id}`);
        // console.log(response);
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export async function unlikeSong(id) {
    try {
        const response = await axiosClient.delete(`/song/unlike?song_id=${id}`);
        // console.log(response);
        return response.data
    } catch (error) {
        console.log(error);
    }
}

//==========================================================================================
// Song's listen count

// listen count ++
export async function increaseListenCount(songId) {
    try {
        const response = await axiosClient.post(`/listen?song_id=${songId}`);
        // console.log(response);
        return response.data
    } catch (error) {
        console.log(error);
    }
}