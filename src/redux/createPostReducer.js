import {postsAPI} from '../api/api'

const ADD_POST = 'ADD_POST'
const LIKE = 'LIKE'
const UNLIKE = 'UNLIKE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    posts: [],
    isFetching: true
}

const createPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {...state, posts: action.data}
        case LIKE:
            return {
                ...state,
                posts: state.posts.map(p => {
                    if (p.id === action.userID) {
                        return {...p, liked: true}
                    }
                    return p
                })
            }
        case UNLIKE:
            return {
                ...state,
                posts: state.posts.map(p => {
                    if (p.id === action.userID) {
                        return {...p, liked: false}
                    }
                    return p
                })
            }
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}
const addPosts = (data) => ({type: ADD_POST, data: data.items})
const setLike = (userID) => ({type: LIKE, userID})
const unsetLike = (userID) => ({type: UNLIKE, userID})
const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const like = (userID) => dispatch => {
    dispatch(setLike(userID))
}

export const unLike = (userID) => dispatch => {
    dispatch(unsetLike(userID))
}

export const getPosts = () => dispatch => {
    dispatch(toggleIsFetching(true))
    postsAPI.getPosts().then(data => {
        dispatch(toggleIsFetching(false))
        dispatch(addPosts(data))
    })
}

export const postPost = ({header, text_post}) => dispatch => {
    postsAPI.postPost({header, text_post})
}

export {createPostReducer}