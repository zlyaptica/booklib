import {combineReducers, createStore} from 'redux'
import {createPostReducer} from './createPostReducer'
import { reducer as formReducer } from 'redux-form'
import {authReducer} from "./authReducer";
import {findTextPostReducer} from "./findTextPostReducer";

let reducers = combineReducers({
    createPost: createPostReducer,
    findTextPost: findTextPostReducer,
    auth: authReducer,
    form: formReducer
})

let store = createStore(reducers)
window.store = store
export {store}