import {postsAPI} from "../api/api"

const ADD_POST = 'ADD_POST'

let initialState = {
    posts: [],
}

const createPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {...state, posts: action.data}
        default:
            return state
    }
}

export const getPosts = () => dispatch => {
    postsAPI.getPosts().then(data => {
        dispatch({type: "ADD_POST", data: data.items})
    })
}

export const postPost = ({newPostHeader, newPostText}) => dispatch => {
    postsAPI.postPost({header: newPostHeader, text_post: newPostText})
}

export {createPostReducer}