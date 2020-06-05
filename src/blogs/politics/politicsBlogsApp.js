import React from 'react'
import Header from '../templates/header.js'
import PoliticsBlogList from './politicsBlogList.js'


function PoliticsBlogsApp(props){
    return (
    <div>
        <Header />
        <PoliticsBlogList apiPoint="politics"  typeOfPost="politics-post"/>
    </div>
    )
}

export default PoliticsBlogsApp
