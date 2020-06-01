import React from 'react'
import Header from '../templates/header.js'
import BlogList from './blogList.js'


function BlogsListApp(props){
    console.log(props.match.params)
    return (
    <div>
        <Header />
        <BlogList type={props.match.params.type}/>
    </div>
    )
}

export default BlogsListApp
