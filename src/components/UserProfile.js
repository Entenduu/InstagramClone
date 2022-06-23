import React, { useState } from 'react'
import PostCard from './PostCard'


function UserProfile({postsData, user, updateProfilePic}) {

  const [profilePic, setProfilePic] = useState("")

  const userPostsfilter = postsData.filter(post => post.username === user.name);
  const userPosts = userPostsfilter.map(post =>{
    return <PostCard key={post.id} post={post} user={user} />
  })

  function handleChange(e){
    setProfilePic(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    updateProfilePic(profilePic)
  }


  return (
    <>
    <h2 className='h2-headers'> Welcome, {user.name}!</h2>
    <form onSubmit={handleSubmit} >
            <div>
              <label>Update Profile Pic:</label>
              <input onChange={handleChange} value={profilePic} type="url"/>
            </div>
            <input type="submit" value="Post" />
        </form>
    <div>
      {userPosts.reverse()}
    </div>
    </>
  )
}

export default UserProfile