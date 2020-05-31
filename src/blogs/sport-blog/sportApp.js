import React from 'react'
import SportBlogList from './sportBlogList.js'
import NavigationBar from '../templates/navigationBar.js'
import Logo from '../templates/logo.js'


function SportApp(){
    return (
    <div>
        <Logo />
        <NavigationBar />
        <SportBlogList />
    </div>
    )
}

export default SportApp
