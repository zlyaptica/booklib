import React from 'react'
import {PostTemplate} from "../PostTemplate/PostTemplate";
import {useSelector, useDispatch} from "react-redux";
import { getPosts } from '../../redux/createPostReducer';

const Post = () => {
    const posts = useSelector(state => state.createPost.posts)
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    return posts.map(post => <PostTemplate key={post.id} header={post.header} text={post.text_post} date={post.created_at} />)
}

export {Post}