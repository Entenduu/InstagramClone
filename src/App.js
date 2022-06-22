import Login from './components/Login';
import { Route } from 'react-router-dom'
import Feed from './components/Feed';
import SignUp from './components/SignUp';
import {React, useState} from 'react';

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name: "", email: ""})
  const [error, setError] = useState("")

  const handleLogin = details => {

    if (details.email == adminUser.email && details.password == adminUser.password){
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
        <SignUp handleLogin={handleLogin} />
      </Route>


      <Route path="/feed" >
        <Feed user={user} />
      </Route>


    </div>
  );
}

export default App;
