import {React, useState} from 'react'
import { useHistory } from 'react-router-dom'

function Login({ handleLogin, error}) {

    const [details, setDetails] = useState({name: "", email: "", password: ""})

    const submitHandler = e => {
      e.preventDefault();

      handleLogin(details)
    }

    const history = useHistory()

    function sendToFeed() {
        history.push('/feed')
    }

    function sendToSignUp() {
        history.push('/signup')
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
          <div className='form-inner'>
            <h2>Login</h2>
            {(error != "") ? (<div className='error'>{error}</div>) : ""}
            <div className='form-group'>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" id='name' placeholder='Username' onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
            </div>
            <div className='form-group'>
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id='email' placeholder='Email' onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
            </div>
            <div className='form-group'>
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" id='password' placeholder='Password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
            </div>
            <input type="submit" value="LOG IN" />
          </div>
        </form>
    </div>
  )
}

export default Login