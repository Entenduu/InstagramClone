import React from 'react'
import { useHistory } from 'react-router-dom'

function Login() {

    const history = useHistory()

    function sendToFeed() {
        history.push('/feed')
    }

  return (
    <div>Login
        <button onClick={() => sendToFeed()} >Log in</button>
    </div>
  )
}

export default Login