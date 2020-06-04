import React from 'react'
import Gallery from './gallery.js'
import MiniBlogList from './miniBlogList.js'
import Header from '../blogs/templates/header.js'

function HomeApp(props){
    return (
        <div>
            <Header />
            <MiniBlogList type="sport" />
            <MiniBlogList type="politics" />
            <MiniBlogList type="tech" />
            <MiniBlogList type="opinion" />
            <MiniBlogList type="other" />
        </div>
    )
}

export default HomeApp