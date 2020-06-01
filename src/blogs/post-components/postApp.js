import React from 'react'
import PostRenderer from './postRenderer'

function PostApp(props){
    return (
    <div>
        <PostRenderer url_id={props.match.params.id} type={props.match.params.typePost}/>
    </div>
    )
}

export default PostApp