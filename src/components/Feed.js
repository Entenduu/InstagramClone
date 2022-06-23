import {React, useEffect, useState} from 'react'
import NavBar from './NavBar'
import {Route, Switch} from 'react-router-dom'
import Liked from './Liked'
import UserProfile from './UserProfile'
import AllPosts from './AllPosts'
import MakeAPost from './MakeAPost'

function Feed({user, postsData, onNewPost, onLike, onLogout, pushToFeed}) {
  
  return (
    <div>
        <NavBar onLogout={onLogout} /> 
        
        <Switch>
            <Route path="/feed/liked" >
                <Liked postsData={postsData} user={user} onLike={onLike}/>
            </Route>
            <Route path="/feed/profile">
                <UserProfile postsData={postsData} user={user} onLike={onLike}/>
            </Route>
            <Route path="/feed/makeapost">
                <MakeAPost onNewPost={onNewPost} user={user}/>
            </Route>
            <AllPosts postsData={postsData} user={user} onLike={onLike}/>
        </Switch>
    </div>
  )
}

export default Feed