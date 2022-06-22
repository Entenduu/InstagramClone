import Login from './components/Login';
import { Route } from 'react-router-dom'
import Feed from './components/Feed';
import SignUp from './components/SignUp';
import {React, useState, useEffect} from 'react';
import { useHistory } from "react-router-dom"

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const history = useHistory()

  const [postsData, SetPostsData] = useState([]);
  const [user, setUser] = useState(0)
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

  const handleLogin = details => {

    let login = false
    
    userData.forEach(temp=>{

      if(temp.password === details.password && temp.name === details.name){
        console.log('logged in!')
        login = true
        setUser(temp.id)
        fetch(`http://localhost:3001/currentUser`,
        {method: 'PATCH',
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(temp.id)})
        .then( history.push("/feed"))
         
      }
    })

    if(!login){
      setError("Error: Incorrect Details")
    }

  }

  function handleSignup(){
    history.push("/signup")
  }

  const handleLogout = () => {
    setUser(0)
  }

  return (
    <div className="App">
      <Route exact path="/" >
        <Login handleLogin={handleLogin} error={error} onSignup={handleSignup}/>
      </Route>

      <Route path="/signup" >
        <SignUp handleLogin={handleLogin} />
      </Route>


      <Route path="/feed" >
        <Feed user={user} postsData={postsData} handleLogout={handleLogout} />
      </Route>


    </div>
  );
}

export default App;
