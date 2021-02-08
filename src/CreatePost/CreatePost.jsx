import React from "react"
import './../normalize.css'
import classes from './CreatePost.module.css'
import {useHistory} from "react-router-dom";
import {reduxForm} from "redux-form";
import {CreatePostForm} from "./CreatePostForm";

const CreatePost = (props) => {
    let returnMane = useHistory()
    const addNewPost = (values) => {
        props.addPost(values.newPostHeader, values.newPostText)
        returnMane.push('/')
    }

    return (
        <section className={classes.createpost}>
            <div className={classes.wrapper}>
                <div className={classes.createpost__wrapper}>
                    <CreatePostReduxForm onSubmit={addNewPost} />
                </div>
            </div>
        </section>
    )
}

const CreatePostReduxForm = reduxForm({form: "createPostForm"})(CreatePostForm);

export {CreatePost}