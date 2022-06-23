import {React, useState} from 'react'

function MakeAPost() {

    const [formFields, setFormFields] = useState({image: '', caption: ''})

    function handleOnChange(e) {
        setFormFields(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
    }

    console.log(formFields)

  return (
    <div>
        <form onSubmit={e => handleSubmit(e)} >
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
        </form>
    </div>
  )
}

export default MakeAPost