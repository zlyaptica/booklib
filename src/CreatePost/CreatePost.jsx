import React from "react"
import './../normalize.css'
import classes from './CreatePost.module.css'
import {useHistory} from 'react-router-dom'
import {reduxForm} from 'redux-form'
import {CreatePostForm} from './CreatePostForm'
import {useDispatch, useSelector} from 'react-redux'
import {postPost} from '../redux/createPostReducer'


const CreatePost = (props) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    const addNewPost = ({header, text_post}) => {
        dispatch(postPost({header, text_post}))
        history.push('/')
    }

    return (
        <section className={classes.createpost}>
            <div className={classes.wrapper}>
                <div className={classes.wrapper}>
                    {isAuthenticated ?
                        <CreatePostReduxForm onSubmit={addNewPost}/>
                        :
                        <h1 className={classes.warning}>Авторизуйтесь для написания постов!</h1>
                    }
                </div>
            </div>
        </section>
    )
}

const CreatePostReduxForm = reduxForm({form: "createPostForm"})(CreatePostForm);

export {CreatePost}