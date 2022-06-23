import React from 'react'
import PostCard from './PostCard'

function Liked( { postsData, user, onLike }) {

  const likedPosts = postsData.filter(post=>post.likes.includes(user.name)).map(post => {
    return <PostCard key={post.id} post={post} user={user} onLike={onLike}/>
})

  return (
    
    <div>
      <h2 className='h2-headers'>Your Liked Photos</h2>
      {likedPosts}
    </div>
  )
}

export default Liked