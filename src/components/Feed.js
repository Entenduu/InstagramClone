import {React, useEffect, useState} from 'react'
import NavBar from './NavBar'
import {Route, Switch} from 'react-router-dom'
import Explore from './Explore'
import UserProfile from './UserProfile'
import PostCard from './PostCard'

function Feed() {
  const [postsData, SetPostsData]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:3001/data')
    .then(resp => resp.json())
    .then(SetPostsData)
  },[])

  const allPosts = postsData.map(post => {
    return <PostCard key={post.id} post={post}/>
  })

  return (
    <div>
        <NavBar />
        <Switch>
            <Route path="/feed/explore" >
                <Explore />
            </Route>
            <Route path="/feed/profile">
                <UserProfile />
            </Route>
        </Switch>
        {allPosts}

    </div>
  )
}

export default Feed