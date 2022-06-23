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


  const [postsData, setPostsData] = useState([]);
  const [user, setUser] = useState({})

  const [error, setError] = useState("")
  const [userData, setUserData] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3001/data')
    .then(resp => resp.json())
    .then(setPostsData)
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
        
        fetch(`http://localhost:3001/currentUser`,{
          method: 'PATCH',
          headers:{"Content-Type":"application/json"},
          body: JSON.stringify(temp)
        })
        .then(pushToFeed)
      }
    })

    if(!login){
      setError("Error: Incorrect Details")
    }

  }

  useEffect(()=>{
    fetch(`http://localhost:3001/currentUser`)
    .then(resp => resp.json())
    .then(setUser)
  },[])

  function pushToFeed() {
    history.push("/feed")
  }

  function handleSignup(){
    history.push("/signup")
  }

  const handleLogout = () => {
    setUser({})
  }

  function handlePost(newPost) {
    console.log(newPost)
    newPost.username = user.name
    fetch('http://localhost:3001/data',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
      })
      .then(resp => resp.json())
      .then(setPostsData)
      .then( history.push("/feed"))
  
  }

  function handleLike(post){


    if(post.likes.includes(user.name)){
      post.likes = post.likes.filter(temp=>{
        if(temp === user.name){
          return false
        }
        return true
      })
    } else {
      post.likes=[...post.likes, user.name]
    }

    fetch(`http://localhost:3001/data/${post.id}`,
    {
      method: "PATCH",
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(post)
    })
    .then(res=>res.json())
    .then(data=>
      {
      setPostsData(postsData.map(postData=>
        {
        if(postData.id === post.id){
          return data
        }
        return postData
      }))
    })
  }


  return (
    
    <div className="App">

      <Route exact path="/" >
        <Login 
        handleLogin={handleLogin} 
        error={error} 
        onSignup={handleSignup}/>
      </Route>

      <Route path="/signup" >
        <SignUp 
        handleLogin={handleLogin} 
        pushToFeed={pushToFeed} 
        user={user} 
        setUser={setUser} />
      </Route>


      <Route path="/feed" >
        <Feed 
        user={user} 
        postsData={postsData} 
        onLogout={handleLogout} 
        onNewPost={handlePost} 
        onLike={handleLike}/>
        handlePush={pushToFeed}
      </Route>

    
    </div>
  );
}

export default App;
