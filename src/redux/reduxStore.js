import {combineReducers, createStore} from 'redux'
import {createPostReducer} from './createPostReducer'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    createPost: createPostReducer,
    form: formReducer
})

let store = createStore(reducers)
window.store = store
export {store}