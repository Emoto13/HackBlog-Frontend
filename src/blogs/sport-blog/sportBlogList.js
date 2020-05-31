import BlogList from '../blogList.js'
import React from 'react'
import SportBlog from './sportBlog.js'

class SportBlogList extends BlogList {
    componentDidMount(){
        fetch('http://127.0.0.1:8000/sport/')
        .then(response =>  response.json())
        .then(json => this.setState({ 'loading': false, data : json}))
        .catch(console.error)
     }

     render_blogs = data => {
        return data
        .map(props => <SportBlog
            id={props.id} 
            title={props.title} 
            content={props.content} 
            date={props.date} 
            image={props.image}
            author_name={props.author_name} />)
    }
}

export default SportBlogList