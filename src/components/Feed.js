import {React, useEffect, useState} from 'react'
import NavBar from './NavBar'
import {Route, Switch} from 'react-router-dom'
import Liked from './Liked'
import UserProfile from './UserProfile'
import PostCard from './PostCard'

function Feed({user}) {
  const [postsData, SetPostsData]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:3001/data')
    .then(resp => resp.json())
    .then(SetPostsData)
  }, [])

  console.log(user)


  const allPosts = postsData.map(post => {
    return <PostCard key={post.id} post={post}/>
  })

  return (
    <div>
        <NavBar />
        <Switch>
            <Route path="/feed/liked" >
                <Liked />
            </Route>
            <Route path="/feed/profile">
                <UserProfile postsData={postsData} />
            </Route>
        </Switch>
        {allPosts}
    </div>
  )
}

export default Feed