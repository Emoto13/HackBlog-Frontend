import React, { Component } from 'react';
import Blog from './blog';


class BlogList extends Component {
    constructor(props){
        super(props)
        this.state = {
            'loading':true,
        }
    }

    componentDidMount(){
        fetch(`http://127.0.0.1:8000/${this.props.apiPoint}/`)
        .then(response =>  response.json())
        .then(json => this.setState({ 'loading': false, data : json}))
        .catch(console.error)
     }

     render_blogs = data => {
        return data
        .map(props => <Blog
            id={props.id} 
            title={props.title} 
            content={props.content} 
            date={props.date} 
            image={props.image}
            author_name={props.author_name}
            type={this.props.typeOfPost} />)
    }

    render() {
        const { loading, data } = this.state
        return ( 
        <div>
            { loading ? 'Loading' : this.render_blogs(data)}
        </div>)
    }
}

export default BlogList