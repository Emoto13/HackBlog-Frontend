import React from 'react'
import PostRenderer from './postRenderer'
import Header from '../blogs/templates/header'

function PostApp(props){
    return (
    <div>
        <Header />
        <PostRenderer url_id={props.match.params.id} type={props.match.params.typePost}/>
    </div>
    )
}

export default PostApp