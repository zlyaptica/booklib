import {combineReducers, createStore} from 'redux'
import {createPostReducer} from "./createPostReducer";

let reducers = combineReducers({
    createPost: createPostReducer
})

let store = createStore(reducers)
window.store = store
export {store}