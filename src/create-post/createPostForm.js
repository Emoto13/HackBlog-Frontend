import React, { Component } from 'react'
import ImageUploader from 'react-images-upload';
import Error404 from '../error-pages/error404';

const ALLOWED_IPS = ['87.116.74.183', '78.90.54.81']

class CreatePostForm extends Component{
    SUCCESSFUL_OUTPUT = (
        <div>
            <input type="text" placeholder="Type your name..." /><br />
            <textarea placeholder="Write your story here..."></textarea>
            <ImageUploader
            withIcon={true}
            buttonText='Choose images'
            onChange={this.onDrop}
            imgExtension={['.jpg', '.gif', '.png', '.gif']}
            maxFileSize={5242880}
            />
        </div>
    )

    ERROR_OUTPUT = <Error404 />


    constructor(props){
        super(props)
        this.state = {
            'title':'',
            'content':'',
            'image': '',
            'date': '',
            'ipv4': '',
            'loadingIP':true
        }
    }

    // get user's ip
    componentDidMount(){
        fetch(`https://geolocation-db.com/json/`)
        .then(res => res.json())
        .then(json => this.setState({'loadingIP': false, 'ipv4': json.IPv4 }))
    }

    // render 404 if user IP is not allowed
    // render create-form if user IP is allowed
    render(){
        const { loadingIP, ipv4 } = this.state
        
        if (loadingIP) return 'Loading'
        
        if (ALLOWED_IPS.includes(ipv4)) return this.SUCCESSFUL_OUTPUT
        else return this.ERROR_OUTPUT 
        
    }
}

export default CreatePostForm