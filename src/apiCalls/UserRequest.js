import api from "./api"

export async function getUsers() {
    let response
    try {
        response = await api.get(`/getUsers/`)
    } catch (error) {
        response = error.response
    }
    return response
}


export async function addUsers(body) {
    let response
    try {
        response = await api.post(`/add/`, body)
    } catch (error) {
        response = error.response
    }
    return response
}

export async function editUsers(identifier) {
    let response
    try {
        response = await api.put(`/update/${identifier}/`)
    } catch (error) {
        response = error.response
    }
    return response
}

export async function fetchCount() {
    let response
    try {
        response = await api.get(`/count/`)
    } catch (error) {
        response = error.response
    }
    return response
}