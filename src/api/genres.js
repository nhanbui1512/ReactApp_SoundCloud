import axiosClient from "./axiosClient";

// to do: getGenresById

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

// to do
/* export async function getGenresById(id) {} */