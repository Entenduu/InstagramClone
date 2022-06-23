import {React, useState} from 'react'

function MakeAPost({onNewPost, pushToFeed}) {

    const [formFields, setFormFields] = useState({image: '', caption: ''})

    function handleOnChange(e) {
        setFormFields(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()

        const newPost = {  
        "username": "",
        "caption": "",
        "image": "",
        "profilePic": "",
        "comments": {},
        "likes": []}

        
        newPost.image = formFields.image
        newPost.caption = formFields.caption
    

        console.log(newPost)
        onNewPost(newPost)
    }

    console.log(formFields)

  return (
    <div className='all-forms-div' >
        <form className='info' onSubmit={handleSubmit} >
        <div className='form-inner'>
            <h2>Make a Post</h2>
            <div className='form-group'>
              <label>Image URL:</label>
              <input onChange={e => setFormFields({...formFields, image: e.target.value})} value={formFields.image} type="url"/>
            </div>
            <div className='form-group'>
              <label>Caption:</label>
              <input onChange={e => setFormFields({...formFields, caption: e.target.value})} value={formFields.caption} type="text"/>
            </div>
            <input type="submit" value="Post" />
            </div>
        </form>
    </div>
  )
}

export default MakeAPost