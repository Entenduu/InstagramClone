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
        <button onClick={() => sendToFeed()} >Log in</button>
        <br></br>
        <p>Don't have an account?</p>
        <button onClick={() => sendToSignUp()} >Sign Up!</button>
    </div>
  )
}

export default Login