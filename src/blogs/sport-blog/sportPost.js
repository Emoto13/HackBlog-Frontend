import React, { Component } from 'react'
import BlogPost from '../blogPost.js'


class SportPost extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: undefined,
            loading:true,
            url_id: this.props.match.params.id
        }
    }

    componentDidMount(){
        fetch(`http://127.0.0.1:8000/sport/${this.state.url_id}`)
        .then(response =>  response.json())
        .then(json => this.setState({ 'loading': false, data : json}))
        .catch(console.error)
     }

    render_post = props => 
                <BlogPost 
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

export default SportPost