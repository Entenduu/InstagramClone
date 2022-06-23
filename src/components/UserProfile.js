import React from 'react'
import PostCard from './PostCard'


function UserProfile({postsData, user}) {

  const userPosts = postsData.filter(post => post.username === user.name);
    
  return (
    <div>
      <h2 className='h2-headers'>Welcome, {user.name}!</h2>
      {userPosts.map(post =>{
        return <PostCard key={post.id} post={post} user={user}/>
      })}
    </div>
  )
}

export default UserProfile