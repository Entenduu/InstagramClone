import React, { useState } from 'react'
import PostCard from './PostCard'


function UserProfile({postsData, user, updateProfilePic}) {

  const [profilePic, setProfilePic] = useState("")

  const userPostsfilter = postsData.filter(post => post.username === user.name);
  const userPosts = userPostsfilter.map(post =>{
    return <PostCard key={post.id} post={post} user={user} />
  })

  function handleChange(e){
    console.log(e.target.value)
    setProfilePic(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    updateProfilePic(profilePic)
  }


  return (
    <>
    <h2 className='h2-headers'> Welcome, {user.name}!</h2>
    <form id="profile-pic" onSubmit={handleSubmit} >
      <div id="inner-bar" className='form-inner'>
            <div className='form-group'>
              <label>Update Profile Pic:</label>
              <input id="profile-pic-input" onChange={handleChange} value={profilePic} type="url"/>
            </div>
            <input id="update-button" type="submit" value="Post" />
      </div>
    </form>
    <div>
      {userPosts.reverse()}
    </div>
    </>
  )
}

export default UserProfile