import React from 'react'
import PostCard from './PostCard'


function UserProfile({postsData, user}) {
  const userPosts = postsData.map(post => {
    console.log(user.name)
    if(post.username === user.name){
      return <PostCard key={post.id} post={post}/>
    }else {
      return null
    }
  })

  return (
    <div>{userPosts}
      <button>New Post</button>
    </div>
  )
}

export default UserProfile