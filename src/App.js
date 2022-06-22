import Login from './components/Login';
import { Route } from 'react-router-dom'
import Feed from './components/Feed';
import SignUp from './components/SignUp';
import {React, useState, useEffect} from 'react';

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }
  const [postsData, SetPostsData] = useState([]);
  const [user, setUser] = useState({name: "", email: ""})
  const [error, setError] = useState("")
  const [userData, setUserData] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3001/data')
    .then(resp => resp.json())
    .then(SetPostsData)
  }, [])

  useEffect(()=>{
    fetch('http://localhost:3001/users')
    .then(resp => resp.json())
    .then(setUserData)
  },[])

console.log(userData, 'hello')

  const handleLogin = details => {
    console.log(details)


    if (details.email === adminUser.email && details.password === adminUser.password){
      console.log('logged in')

      setUser({
        name: details.name,
        email: details.email
      });
      console.log(user)
    }else{
      setError("Error: Incorrect Details")
    }
  }

  const handleLogout = () => {
    setUser({ name: "", email: ""})
  }

  return (
    <div className="App">
      <Route exact path="/" >
        <Login handleLogin={handleLogin} error={error} />
      </Route>

      <Route path="/signup" >
        <SignUp />
      </Route>


      <Route path="/feed" >
        <Feed user={user} postsData={postsData} />
      </Route>


    </div>
  );
}

export default App;
