import React from 'react'
import Header from '../templates/header.js'
import OpinionBlogList from './opinionBlogList.js'


function OpinionBlogsApp(props){
    return (
    <div>
        <Header />
        <OpinionBlogList apiPoint="opinion"  typeOfPost="opinion-post"/>
    </div>
    )
}

export default OpinionBlogsApp