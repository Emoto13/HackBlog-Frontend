import React from 'react'
import Header from '../templates/header.js'
import OtherBlogList from './otherBlogList.js'


function OtherBlogApp(props){
    return (
    <div>
        <Header />
        <OtherBlogList apiPoint="other"  typeOfPost="other-post"/>
    </div>
    )
}

export default OtherBlogApp
