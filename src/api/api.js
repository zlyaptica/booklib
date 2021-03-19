import * as axios from 'axios'

const instance = axios.create({
    baseURL: `http://localhost:8080/`,
    withCredentials: true
})

export const postsAPI = {
    getPosts() {
        return instance.get(`posts`).then(response => {
            response.data.items = response.data.items.map((el) => {
                el.created_at = Date.parse(el.created_at)
                return el
            })
            return response.data
        })
    },
    postPost({header, text_post}) {
        return instance.post(`private/posts`, {
            header,
            text_post
        })
    }
}

export const authAPI = {
    getMe() {
        try {
            return instance.get(`private/whoami`).then()
        } catch (e) {
            debugger
        }
    },
    login(email, password, rememberMe) {
        return instance.post(`sessions`, {
            email,
            password,
            rememberMe
        })
    },
    signUp(username, email, password) {
        return instance.post(`users`, {
            username,
            email,
            password,
        })
    },
    signIn() {
        return instance.get(`private/whoami`).then(response => {
            return response.data
        })
    }
}