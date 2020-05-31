import React, { Component } from 'react';
import Blog from './blog.js';


class BlogList extends Component {
    constructor(props){
        super(props)
        this.state = {
            'id': 0,
            'title':'',
            'content':'',
            'date':'',
            'image':'',
            'author_name':'',
            'loading':true,
        }
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