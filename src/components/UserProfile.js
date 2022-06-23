import React from 'react'
import PostCard from './PostCard'
import ProfilePostCards from './ProfilePostCards';


function UserProfile({postsData, user}) {

  const userPosts = postsData.filter(post => post.username === user.name);
    
  return (
    <>
    <h2 className='h2-headers' >Welcome, {user.name}!</h2>
    <div className="card-group">
      {userPosts.map(post =>{
        return <ProfilePostCards key={post.id} post={post} user={user} />
      })}
    </div>
    </>
  )
}

export default UserProfile