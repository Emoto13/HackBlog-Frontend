import React from 'react'
import Header from '../blogs/templates/header.js'
import Slideshow from './slideShow.js'


function HomeApp(props){
    return (
        <div>
            <Header />
            <Slideshow />
        </div>
    )
}

export default HomeApp