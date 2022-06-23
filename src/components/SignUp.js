import {React, useState} from 'react'

function SignUp({handleLogin}) {

  const [newUser, setNewUser] = useState({name: "", password: ""})

  const submitHandler = e => {
    e.preventDefault();
    console.log(newUser)
    fetch('http://localhost:3001/users',
    {method: "POST",
    headers: {"Content-Type":"application/json"},
    body:JSON.stringify(newUser)})
    .then(res=>res.json())
    .then(data=>handleLogin(data))
  }

  function handleOnChange(e){
    const value = e.target.value
    const name = e.target.name
    setNewUser({...newUser,
    [name]: value})
  }

  return (
    <div id='sign-up-form' className='all-forms-div'>

        <form className='info' onSubmit={submitHandler}>
          <div className='form-inner'>
            <h2>Sign Up</h2>
            <div className='form-group'>
              <label htmlFor="name">Choose a username:</label>
              <input
              type="text"
              name="name"
              id='name'
              placeholder='Username'
              onChange={handleOnChange}
              value={newUser.name}/>
            </div>
            <div className='form-group'>
              <label htmlFor="password">Enter a password:</label>
              <input type="password" name="password" id='password' placeholder='Password'
              onChange={handleOnChange} value={newUser.password}/>
            </div>
            <input type="submit" value="Submit"/>
          </div>
        </form>

    </div>
  )
}

export default SignUp