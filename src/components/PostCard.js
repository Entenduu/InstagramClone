import React from 'react'

function PostCard({post}) {
  return (
    <div className="post-card" >
      <img className="post-image" src={post.image} alt={post.caption}></img>
      <p>{post.username}</p>
      <p>{post.caption}</p>
    </div>
  )
}

export default PostCard