import React from 'react'
import PostCard from './PostCard'


function UserProfile({postsData, user}) {

  const userPostsfilter = postsData.filter(post => post.username === user.name);
  const userPosts = userPostsfilter.map(post =>{
    return <PostCard key={post.id} post={post} user={user} />
  })
  return (
    <>
    <h2 className='h2-headers'> Welcome, {user.name}!</h2>
    <div>
      {userPosts.reverse()}
    </div>
    </>
  )
}

export default UserProfile