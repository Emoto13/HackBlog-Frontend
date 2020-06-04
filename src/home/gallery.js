import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery'

const topics = ['sport', 'politics', 'tech', 'opinion', 'other']
const randomItem = topics[Math.floor(Math.random() * topics.length )]

class Gallery extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: '',
            loading:true
        }
    }

    componentDidMount(){
        fetch(`http://127.0.0.1:8000/sport`)
        .then(response =>  response.json())
        .then(json => this.setState({ 'loading': false, data : json}))
        .catch(console.error)
    }

    renderImages = (data) => {
                return data
                .map(entry => {return {original: entry.image, thumbnail: entry.image} })
    }   

    render(){
        const { loading, data } = this.state

        return (
        <div>
           {loading ? 'Loading' : <ImageGallery items={this.renderImages(data)}/>}   
        </div>
        )
    }
}

export default Gallery