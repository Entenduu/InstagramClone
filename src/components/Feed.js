import {React, useEffect, useState} from 'react'
import NavBar from './NavBar'
import {Route, Switch} from 'react-router-dom'
import Liked from './Liked'
import UserProfile from './UserProfile'
import PostCard from './PostCard'
import MakeAPost from './MakeAPost'

function Feed({user, postsData}) {
  




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
            <Route path="/feed/makeapost">
                <MakeAPost />
            </Route>
        </Switch>
        {allPosts}
    </div>
  )
}

export default Feed