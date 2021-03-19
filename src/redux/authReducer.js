import {authAPI} from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    isAuthenticated: false,
}

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

export const setAuthData = (userId, username, email, isAuthenticated) => ({
    type: SET_USER_DATA,
    data: {userId, username, email, isAuthenticated}
})

export const getMe = () => dispatch => {
    authAPI.getMe().then(data => {
        if (data.status === 200) {
            dispatch(setAuthData(data.data.id, data.data.username, data.data.email, true))
        }
    })
}
export const login = (email, password, rememberMe) => dispatch => {
    authAPI.login(email, password, rememberMe).then(data => {
        if (data.status === 200) {
            dispatch(getMe())
        }
    })
}
export const signup = (username, email, password) => dispatch => {
    authAPI.signUp(username, email, password).then(data => {
        if (data.status === 201) {
            dispatch(login(email, password))
        }
    })
}

export {authReducer}