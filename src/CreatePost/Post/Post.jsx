import React from 'react'
import {PostTemplate} from '../PostTemplate/PostTemplate'
import {useSelector, useDispatch} from 'react-redux'
import {getPosts} from '../../redux/createPostReducer'
import Preloader from './../img/preloader.gif'

const Post = () => {
    const posts = useSelector(state => state.createPost.posts)
    const isFetching = useSelector(state => state.createPost.isFetching)
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    const postsElement = posts.map(post => <PostTemplate key={post.id} id={post.id} header={post.header}
                                                         text={post.text_post} date={post.created_at}
                                                         author={post.author.username}
                                                         liked={post.liked}/>)

    return <>
        {isFetching ? <img src={Preloader} alt=""/> : null}
        {postsElement}
    </>
}

export {Post}