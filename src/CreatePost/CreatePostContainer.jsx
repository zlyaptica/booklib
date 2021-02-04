import React from "react"
import './../normalize.css'
import {connect} from "react-redux";
import {CreatePost} from "./CreatePost";
import {addPost, updateNewPostHeader, updateNewPostText} from "../redux/createPostReducer";

let mapStateToProps = (state) => {
    return {
        posts: state.createPost.posts,
        newPostHeader: state.createPost.newPostHeader,
        newPostText: state.createPost.newPostText
    }
}

const CreatePostContainer = connect(mapStateToProps, {addPost, updateNewPostHeader, updateNewPostText})(CreatePost)

export {CreatePostContainer}
