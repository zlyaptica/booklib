import React from 'react'
import {PostTemplate} from "../PostTemplate/PostTemplate";

const Post = (props) => {


    let postsElements = props.posts.map(post => <PostTemplate header={post.headerPost} text={post.textPost} />)

    return (
        <div>
            {postsElements}
        </div>
    )
}

export {Post}