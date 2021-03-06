import React from "react"
import './../normalize.css'
import classes from './CreatePost.module.css'
import {useHistory} from "react-router-dom";
import {reduxForm} from "redux-form";
import {CreatePostForm} from "./CreatePostForm"
import {usersAPI} from "../api/api";

const CreatePost = (props) => {
    const returnMain = useHistory()

    const addNewPost = ({newPostHeader, newPostText}) => {
        const post = {
            header: newPostHeader,
            post_text: newPostText
        }

        usersAPI.postPosts(post)

        returnMain.push('/')
    }

    return (
        <section className={classes.createpost}>
            <div className={classes.wrapper}>
                <div className={classes.createpost__wrapper}>
                    <CreatePostReduxForm onSubmit={addNewPost}/>
                </div>
            </div>
        </section>
    )
}

const CreatePostReduxForm = reduxForm({form: "createPostForm"})(CreatePostForm);

export {CreatePost}