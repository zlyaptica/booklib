import {applyMiddleware, combineReducers, createStore, compose} from 'redux'
import {createPostReducer} from './createPostReducer'
import { reducer as formReducer } from 'redux-form'
import {authReducer} from './authReducer'
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
    createPost: createPostReducer,
    auth: authReducer,
    form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))
window.store = store
export {store}