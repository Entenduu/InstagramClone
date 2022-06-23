import React from 'react'
import PostCard from './PostCard'


function UserProfile({postsData, user}) {


  const userPosts = postsData.map(post => {
    
    if(post.username === user.currentUsername){
      return <PostCard key={post.id} post={post}/>
    }else {
      return null
    }
  })

  return (
    <div>{userPosts}</div>
  )
}

export default UserProfile