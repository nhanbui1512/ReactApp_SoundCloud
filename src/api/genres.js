import axiosClient from "./axiosClient";

export async function createGenre(formdata) {
    try {
        const response = await axiosClient.post(`/genre/create`, formdata);
        // console.log(response);
        return response.data
    } catch (error) {
        throw error
    }
}

export async function createGenreByDetails(genreName) {
    try {
        const formdata = new FormData()
        formdata.append('name', genreName)
        const response = await axiosClient.post(`/genre/create`, formdata);
        // console.log(response);
        return response.data
    } catch (error) {
        throw error
    }
}

export async function getGenres() {
    try {
        const response = await axiosClient.get(`/genre/getall`);
        // console.log(response);
        return response.data
    } catch (error) {
        throw error
    }
}

export async function getSongsByGenreId(genreId, page = 1, perPage = 10) {
    try {
        const response = await axiosClient.get(`/genre/get-songs?id=${genreId}&page=${page}&per_page=${perPage}`);
        // console.log(response);
        return response.data
    } catch (error) {
        throw error
    }
}