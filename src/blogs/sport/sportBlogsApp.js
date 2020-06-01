import React from 'react'
import Header from '../templates/header.js'
import SportBlogList from './sportBlogList.js'


function SportBlogsApp(props){
    return (
    <div>
        <Header />
        <SportBlogList apiPoint="sport"  typeOfPost="sport-post"/>
    </div>
    )
}

export default SportBlogsApp
