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

// export const addPost = (newPostHeader, newPostText) => ({type: ADD_POST, newPostHeader, newPostText})
// export const clearState = () => ({type: CLEAR_STATE})

export {createPostReducer}