import React, { useEffect } from "react"
import './../normalize.css'
import classes from './CreatePost.module.css'
import {useHistory} from "react-router-dom";
import {reduxForm} from "redux-form";
import {CreatePostForm} from "./CreatePostForm"
import { useDispatch, useSelector } from "react-redux";
import { postPost } from '../redux/createPostReducer';
import { getMe } from "../redux/authReducer";


const CreatePost = (props) => {
    const returnMain = useHistory()
    const dispatch = useDispatch()
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    
    const addNewPost = ({newPostHeader, newPostText}) => {
        dispatch(postPost({newPostHeader, newPostText}))
        returnMain.push('/')
    }
    
    useEffect(() => {
        dispatch(getMe())
    }, [dispatch])

    return (
        <section className={classes.createpost}>
            <div className={classes.wrapper}>
                <div className={classes.createpost__wrapper}>
                    {isAuthenticated ? 
                        <CreatePostReduxForm onSubmit={addNewPost}/>
                    :
                        <h1 className={classes.createpost__warning}>Авторизуйтесь для написания постов!</h1>
                    }
                </div>
            </div> 
        </section>
    )
}

const CreatePostReduxForm = reduxForm({form: "createPostForm"})(CreatePostForm);

export {CreatePost}