const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}

export const setUserData = (userId, username, email, password) => ({type: SET_USER_DATA, data: {userId, username, email, password}})

export {authReducer}