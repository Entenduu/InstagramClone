import {React, useEffect, useState} from 'react'
import NavBar from './NavBar'
import {Route, Switch} from 'react-router-dom'
import Liked from './Liked'
import UserProfile from './UserProfile'
import AllPosts from './AllPosts'
function Feed({user, postsData}) {
  




  
  
  return (
    <div>
        <NavBar /> 
        <Switch>
            <Route path="/feed/liked" >
                <Liked />
            </Route>
            <Route path="/feed/profile">
                <UserProfile postsData={postsData} user={user}/>
            </Route>
            <AllPosts postsData={postsData}/>
        </Switch>
    </div>
  )
}

export default Feed