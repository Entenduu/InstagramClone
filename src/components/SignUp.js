import React from 'react'
import { useHistory } from 'react-router-dom'

function SignUp() {
  const history = useHistory()
  
  function sendToFeed() {
    history.push('/feed')
}
  return (
    <div className='sign-up-form'>
      <h1>Sign Up!</h1>
      <form>
        <label for='email'>Email:</label>
          <input type='email' name="email" placeholder='Email'/>
          <br/>
        <label for="username">Username:</label>
          <input type="text" id="username" name="username" placeholder='Username'/>
          <br/>
        <label for='password'>Password:</label>
          <input type='password' name='password' placeholder='Password'/>
          <br/>
          <button onClick={() => sendToFeed()}>submit</button>
      </form>

    </div>
  )
}

export default SignUp