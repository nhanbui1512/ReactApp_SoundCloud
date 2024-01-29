import axiosClient from "./axiosClient";

export async function signIn(email, password) {
    try {
        const formdata = new FormData()
        formdata.append('email', email)
        formdata.append('password', password)
        const response = await axiosClient.post(`/login`, formdata)
        return response.data
    } catch (error) {
        throw error
    }
}

export async function registerUser({username, email, password}) {
    try {
        const formdata = new FormData()
        formdata.append('userName', username)
        formdata.append('email', email)
        formdata.append('password', password)
        const response = await axiosClient.post(`/user/register`, formdata)
        return response.data
    } catch (error) {
        throw error
    }
}

export async function changePassword({currentPassword, newPassword, confirmPassword}) {
    try {
        const formdata = new FormData()
        formdata.append('ownPassWord', currentPassword)
        formdata.append('newPassWord', newPassword)
        formdata.append('confirmPassWord', confirmPassword)
        const response = await axiosClient.put(`/user/change-password`, formdata)
        return response.data
    } catch (error) {
        throw error
    }
}

//==========================================================================================
// Profile

// get user profile by access token
export async function getCurrentUserProfile() {
    try {
        const response = await axiosClient.get(`/user/get-profile`);
        // console.log(response);
        return response.data
    } catch (error) {
        throw error
    }
}

export async function getUsersById(id) {
    try {
        const response = await axiosClient.get(`/user?user_id=${id}`);
        // console.log(response);
        return response.data
    } catch (error) {
        throw error
    }
}

export async function getUsersByName(name) {
    try {
        const response = await axiosClient.get(`/user/search?value=${name}`);
        // console.log(response);
        return response.data
    } catch (error) {
        throw error
    }
}

export async function updateUserDetails({username = "", city = "", country = "", bio = ""}) {
    try {
        if (username === "" && city === "" && country === "" && bio === "") {
            return null
        } else {
            const formdata = new FormData()
            username !== "" && formdata.append('userName', username)
            city !== "" && formdata.append('city', city)
            country !== "" && formdata.append('country', country)
            bio !== "" && formdata.append('bio', bio)
            const response = await axiosClient.put(`/user/update`, formdata)
            return response.data
        }
    } catch (error) {
        throw error
    }
}