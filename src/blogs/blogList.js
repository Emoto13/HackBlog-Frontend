import React, { Component } from 'react';


class BlogList extends Component {
    constructor(props){
        super(props)
        this.state = {
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