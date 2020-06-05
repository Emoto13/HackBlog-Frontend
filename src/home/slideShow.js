import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import BlogSlide from './blogSlide';
 
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
 
class Slideshow extends Component{
    constructor(props){
        super(props)
        this.state = {
            'loading':true,
            'data': ''
        }
    }

    componentDidMount(){
        fetch(`http://127.0.0.1:8000/sport/`)
        .then(response =>  response.json())
        .then(json => this.setState({ 'loading': false, data : json}))
        .catch(console.error)
     }

     render_blogs = data => {
        return data
        .map(props => <BlogSlide
            key={props.id}
            id={props.id} 
            title={props.title}  
            image={props.image} />)
    }

    render(){
        const { loading, data } = this.state

        return (
            
            <div className="slide-container">
                { loading ? 'Loading' : <Slide {...properties}>{this.render_blogs(data)}</Slide>}
            </div>
        )
    }
}

export default Slideshow