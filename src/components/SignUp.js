import {React, useState} from 'react'
import { useHistory } from 'react-router-dom'

function SignUp({handleLogin}) {
  const history = useHistory()

  const [newUserDetails, setNewUserDetails] = useState({name: "", email: "", password: ""})

  const submitHandler = e => {
    e.preventDefault();

    handleLogin(newUserDetails)
  }
  
  function sendToFeed() {
    history.push('/feed')
}
  return (
    <div className='sign-up-form'>

        <form onSubmit={submitHandler}>
          <div className='form-inner'>
            <h2>Sign Up</h2>
            <div className='form-group'>
              <label htmlFor="name">Choose a username:</label>
              <input type="text" name="name" id='name' placeholder='Username' onChange={e => setNewUserDetails({...newUserDetails, name: e.target.value})} value={newUserDetails.name}/>
            </div>
            <div className='form-group'>
              <label htmlFor="email">Enter your email:</label>
              <input type="email" name="email" id='email' placeholder='Email' onChange={e => setNewUserDetails({...newUserDetails, email: e.target.value})} value={newUserDetails.email}/>
            </div>
            <div className='form-group'>
              <label htmlFor="password">Enter a password:</label>
              <input type="password" name="password" id='password' placeholder='Password' onChange={e => setNewUserDetails({...newUserDetails, password: e.target.value})} value={newUserDetails.password}/>
            </div>
            <input type="submit" value="SIGN UP" onClick={() =>sendToFeed()}/>
          </div>
        </form>

    </div>
  )
}

export default SignUp