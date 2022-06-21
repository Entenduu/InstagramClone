import React from 'react'
import { useHistory } from 'react-router-dom'

function Login() {

    const history = useHistory()

    function sendToFeed() {
        history.push('/feed')
    }

    function sendToSignUp() {
        history.push('/signup')
    }

  return (
    <div>
        <p>Log in</p>
        <label for='username'>Username</label>
          <input type="text" id="username" name="username" placeholder='Username'/>
        <br/>
        <label for='password'>Password:</label>
          <input type='password' name='password' placeholder='Password'/>
          <br/>
        <button onClick={() => sendToFeed()} >Log in</button>
        <br></br>
        <p>Don't have an account?</p>
        <button onClick={() => sendToSignUp()} >Sign Up!</button>
    </div>
  )
}

export default Login