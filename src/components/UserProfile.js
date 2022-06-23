import React from 'react'
import PostCard from './PostCard'


function UserProfile({postsData, user}) {


  const userPosts = postsData.filter(post => post.username === user.name);
    




  return (
    <div>{ 
      userPosts.map(post =>{
        return <PostCard key={post.id} post={post}/>
    })}</div>
  )
}

export default UserProfile