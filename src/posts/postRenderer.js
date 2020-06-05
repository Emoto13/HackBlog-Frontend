import React, { Component } from "react";
import Post from "./post";


class PostRenderer extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: undefined,
            loading:true,
            url_id: this.props.url_id,
            type: map_post_to_type(this.props.type)
        }
    }

    componentDidMount(){
        fetch(`http://127.0.0.1:8000/${map_post_to_type(this.props.type)}/${this.state.url_id}`)
        .then(response =>  response.json())
        .then(json => this.setState({ 'loading': false, data : json}))
        .catch(console.error)
     }

    render_post = props => 
                <Post
                id={props.id} 
                title={props.title} 
                content={props.content} 
                date={props.date} 
                image={props.image}
                author_name={props.author_name} />

    render() {
        const { loading, data } = this.state
        return ( 
        <div>
            { loading ? 'Loading' : this.render_post(data)}
        </div>)
    }
}

function map_post_to_type(post){
    let mapper = {
        'sport-post': 'sport',
        'politics-post': 'politics',
        'opinion-post': 'opinion',
        'tech-post':'tech',
        'other-post':'other'
    }
    return mapper[post]
}

export default PostRenderer