import * as axios from "axios";

const instance = axios.create({
    baseURL: `http://localhost:8080/`,
    withCredentials: true
})

export const postsAPI = {
    getPosts() {
        return instance.get(`posts`).then(response => {
            return response.data
        })
    },
    postPost({header, text_post}) {
        return instance.post(`private/posts`, {
            header: header, 
            text_post: text_post
        })
    }
}

// export const usersAPI = {
//     getUser() {
//         return instance.get(`users`).then(response => {
//             return response.data
//         })
//     }
// }

export const authAPI = {
    getMe() {
        try {
            return instance.get(`private/whoami`).then()
        } catch(e) {
            debugger
        }
    },
    login(email, password) {
        return instance.post(`sessions`, {
            email: email,
            password: password,
        })
    },
    signUp(username, email, password) {
        return instance.post(`users`, {
            username: username,
            email: email,
            password: password
        })
    },
    signIn() {
        return instance.get(`private/whoami`).then(response => {
            return response.data
        })
    }
}