const ADD_POST = 'ADD_POST'

let initialState = {
    posts: [],
}

const createPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                headerPost: action.newPostHeader,
                textPost: action.newPostText
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostHeader: '',
                newPostText: ''
            }
        default:
            return state
    }
}

export const addPost = (newPostHeader, newPostText) => ({type: ADD_POST, newPostHeader, newPostText})

export {createPostReducer}