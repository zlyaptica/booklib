import React from 'react'
import {connect} from "react-redux";
import {Post} from "./Post";

let mapStateToProps = (state) => {
    return {
        posts: state.createPost.posts,
    }
}

const PostContainer = connect(mapStateToProps)(Post)

export {PostContainer}