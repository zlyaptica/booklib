import {combineReducers, createStore} from 'redux'
import {createPostReducer} from './createPostReducer'
import { reducer as formReducer } from 'redux-form'
import {authReducer} from "./authReducer"

let reducers = combineReducers({
    createPost: createPostReducer,
    auth: authReducer,
    form: formReducer
})

let store = createStore(reducers)
window.store = store
export {store}