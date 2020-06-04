import React, { Component } from 'react'
import ImageUploader from 'react-images-upload'
import Error404 from '../error-pages/error404'
import Select from 'react-select'
import axios from 'axios'


const ALLOWED_IPS = ['87.116.74.183', '78.90.54.81']

const options = [ 
    {value:'sport', label: 'sport'},
    {value:'politics', label: 'politics'},
    {value:'tech', label: 'tech'},
    {value:'opinion', label: 'opinion'},
    {value:'other', label: 'other'}]

class CreatePostForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            'title':'',
            'content':'',
            'image': '',
            'authorName': '',
            'ipv4': '',
            'typeOfPost':'sport',
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
        
        if (ALLOWED_IPS.includes(ipv4)) { 
            return (
                <form>
                    <input type="text" placeholder="Type your name here..." onChange={(e) => this.handleAuthorNameChange(e)} /><br />                    
                    <input type="text" placeholder="Type post title here..." onChange={(e) => this.handleTitleChange(e)} /><br />
                    <textarea placeholder="Write your story here..."  onChange={(e) => this.handleContentChange(e)}></textarea>
                    <input name="image" type="file" onChange={(e) => this.handleImageChange(e.target.files[0])} />
                    <Select 
                    options={options}
                    value={{value: this.state.typeOfPost, label: this.state.typeOfPost}} 
                    onChange={(e) => this.handleDropdownChange(e)} />
                    <button type="button" onClick={() => this.handleSubmitButton()}>Submit</button>
                </form>
            )
        }
        return <Error404 /> 
    }

    handleAuthorNameChange(e){
        this.setState({"authorName": e.target.value})
    }    

    handleTitleChange(e){
        this.setState({"title": e.target.value})
    }

    handleContentChange(e) {
        this.setState({"content": e.target.value})
    }

    handleImageChange(e){
        this.setState({"image": e})
    }

    handleDropdownChange(e){
       this.setState({"typeOfPost": e.value})
    }


    handleSubmitButton(){
        const currentDate = new Date().toJSON().slice(0,10).split('/').join('-')
        const uploadData = new FormData()
        uploadData.append('title', this.state.title)
        uploadData.append('author_name', this.state.authorName)
        uploadData.append('content', this.state.content)
        uploadData.append('date', currentDate)
        uploadData.append('image', this.state.image)

        fetch(`http://127.0.0.1:8000/${this.state.typeOfPost}/create`, {
            method: 'POST',
            body: uploadData
          })
          .then(res => console.log(res))
          .catch(error => console.log(error))
        }

}

export default CreatePostForm