import React, { Component } from 'react'
import MiniBlog from './miniBlog'

class MiniBlogList extends Component {
    constructor(props){
        super(props)
        this.state = {
            type: props.type,
            data: '',
            loading: true
        }
    }

    componentDidMount(){
        fetch(`http://127.0.0.1:8000/${this.state.type}`)
        .then(response =>  response.json())
        .then(json => this.setState({ 'loading': false, data : json}))
        .catch(console.error)
    }

    renderMiniBlogs = (data) => {
        return data
        .map(entry => 
        <MiniBlog 
        key={entry.id}
        title={entry.title}
        image={entry.image} />)
    }

    render(){
        const { loading, data } = this.state

        
        return (
            <div>
                <h1>{capitalizeFirstLetter(this.state.type)}</h1>
                { loading ? 'Loading' : this.renderMiniBlogs(data)}
            </div>
        )
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

export default MiniBlogList