const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const UPDATE_NEW_POST_HEADER = 'UPDATE_NEW_POST_HEADER'

let initialState = {
    posts: [{
        headerPost: '',
        textPost: ''
    }],
    newPostHeader: '',
    newPostText: '',
}

const createPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                headerPost: state.newPostHeader,
                textPost: state.newPostText
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostHeader: '',
                newPostText: ''
            }
        case UPDATE_NEW_POST_HEADER:
            return {
                ...state,
                newPostHeader: action.header,
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text,
            }
        default:
            return state
    }
}

export const addPost = () => ({type: ADD_POST})
export const updateNewPostHeader = (header) => ({type: UPDATE_NEW_POST_HEADER, header})
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, text})

export {createPostReducer}