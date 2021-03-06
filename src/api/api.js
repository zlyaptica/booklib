import * as axios from "axios";

const instance = axios.create({
    baseURL: `http://localhost:8080/`,
    withCredentials: true
})

export const usersAPI = {
    getPosts() {
        return instance.get(`posts`).then(response => {
            return response.data
        })
    },
    postPosts(post) {
        return instance.post(`private/posts`, post)
    },
    signIn() {
        return instance.get(`private/whoami`).then(response => {
            return response.data
        })
    }
}