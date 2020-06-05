import React from 'react'
import Header from '../templates/header.js'
import TechBlogList from './techBlogList.js'


function TechBlogsApp(props){
    return (
    <div>
        <Header />
        <TechBlogList apiPoint="tech"  typeOfPost="tech-post"/>
    </div>
    )
}

export default TechBlogsApp
