import React from 'react'
import {PostTemplate} from "../PostTemplate/PostTemplate";
import {usersAPI} from "../../api/api";
import {useSelector, useDispatch} from "react-redux";

const Post = () => {
    const posts = useSelector(state => state.createPost.posts)
    const dispatch = useDispatch()

    React.useEffect(() => {
        usersAPI.getPosts().then(data => {
            dispatch({type: "ADD_POST", data: data.items})
        })
    }, [dispatch])

    const postsElements = posts.map(post => <PostTemplate key={post.id} header={post.header} text={post.text_post} />)

    return (
        <div>
            {postsElements}
        </div>
    )
}

export {Post}