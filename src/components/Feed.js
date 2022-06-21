import {React, useEffect} from 'react'
import NavBar from './NavBar'
import {Route, Switch} from 'react-router-dom'
import Explore from './Explore'
import UserProfile from './UserProfile'

function Feed() {

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
    </div>
  )
}

export default Feed