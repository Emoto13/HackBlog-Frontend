import React from 'react'
import Header from '../blogs/templates/header'
import CreatePostForm from './createPostForm'

function CreatePostApp(props){
    return (
        <div>
            <Header />
            <CreatePostForm />
        </div>
    )
}

export default CreatePostApp