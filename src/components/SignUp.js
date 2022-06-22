import {React, useState} from 'react'
// import { useHistory } from 'react-router-dom'

function SignUp({handleLogin}) {
  // const history = useHistory()

<<<<<<< HEAD
  const [newUserDetails, setNewUserDetails] = useState({name: "", password: ""})
=======
  const [newUser, setNewUser] = useState({name: "", password: ""})
>>>>>>> 020faecbb15e84ee66100e8bed85882228a8633f

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
  
//   function sendToFeed() {
//     history.push('/feed')
// }
  return (
    <div className='sign-up-form'>

        <form onSubmit={submitHandler}>
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
            {/* <div className='form-group'>
              <label htmlFor="email">Enter your email:</label>
              <input type="email" name="email" id='email' placeholder='Email' onChange={e => setNewUserDetails({...newUserDetails, email: e.target.value})} value={newUserDetails.email}/>
            </div> */}
            <div className='form-group'>
              <label htmlFor="password">Enter a password:</label>
              <input type="password" name="password" id='password' placeholder='Password'
              onChange={handleOnChange} value={newUser.password}/>
            </div>
            <input type="submit" value="submit"
            // onClick={() =>sendToFeed()}
            />
          </div>
        </form>

    </div>
  )
}

export default SignUp