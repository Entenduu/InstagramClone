import {React, useEffect, useState} from 'react'
import NavBar from './NavBar'
import {Route, Switch} from 'react-router-dom'
import Liked from './Liked'
import UserProfile from './UserProfile'
<<<<<<< HEAD
import AllPosts from './AllPosts'

=======
import PostCard from './PostCard'
import MakeAPost from './MakeAPost'
>>>>>>> dcc490bd1786cdb38ae357a00acc3d6ee2788df2

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
<<<<<<< HEAD
            <AllPosts postsData={postsData}/>
=======
            <Route path="/feed/makeapost">
                <MakeAPost />
            </Route>
>>>>>>> dcc490bd1786cdb38ae357a00acc3d6ee2788df2
        </Switch>
    </div>
  )
}

export default Feed