import React from 'react'

function MakeAPost() {
  return (
    <div>
        <form>
            <h2>Make a Post</h2>
            <div className='form-group'>
              <label>Image URL:</label>
              <input type="url"/>
            </div>
            <div className='form-group'>
              <label>Caption:</label>
              <input type="text"/>
            </div>
            <input type="submit" value="Post" />
        </form>
    </div>
  )
}

export default MakeAPost