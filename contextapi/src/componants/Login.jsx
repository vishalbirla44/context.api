import React, { useContext,useState } from 'react'
import Usercontext from '../context/Usercontext'


const Login = () => {
  const {setuser} = useContext(Usercontext)
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')

  const submitHandale = (e) => {
    e.preventDefault()  
      setuser({username,password})
  }

  return (
     <>
     <label > user name</label>
     <input type="text" placeholder='enter your name' onChange={(e) => setusername(e.target.value)} value={username} />

     <label>Password</label>
     <input type='pasword' placeholder='password' onChange={(e) => setpassword(e.target.value)}/>

     <button onClick={submitHandale}> Singup</button>
     </>
  )
}

export default Login