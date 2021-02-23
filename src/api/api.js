import * as axios from "axios";

const instance = axios.create({
    baseURL: `http://localhost:8080/`
})

export const usersAPI = {
    getPosts() {
        return instance.get(`posts`).then( response => {
            return response.data
        })
    },
    postPosts() {
        return instance.post(`posts`).then( response => {
            return response.data
        })
    },
    postUsers() { // регистрация
        return instance.post(`users`).then( response => {
            return response.data
        })
    },
    getUsers() { // авторизация
        return instance.get(`users`).then( response => {
            return response.data
        })
    }
}