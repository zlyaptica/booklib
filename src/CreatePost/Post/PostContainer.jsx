import React from 'react'
import {connect} from "react-redux";
import {Post} from "./Post";
import {addPost} from "../../redux/createPostReducer";
import {usersAPI} from "../../api/api";

class PostContainer extends React.Component {

    componentDidMount() {
        usersAPI.getPosts().then(data => {
            data.forEach(element => {
                this.props.addPost(element.header, element.text_post);
            })
        })
    }

    render() {
        return <Post {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.createPost.posts,
    }
}

export default connect(mapStateToProps, {addPost})(PostContainer);