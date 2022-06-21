import React from 'react'

function PostCard({post}) {
  return (
    <div>
      <img src={post.image} alt={post.caption}></img>
      <p>{post.username}</p>
      <p>{post.caption}</p>
    </div>
  )
}

export default PostCard