import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';
function Login() {
    const [name,setname] = useState('');
    const[password,setpassword] = useState('');
    const {setuser} = useContext(UserContext);
    const handleSubmit=(e)=>{
      e.preventDefault()
      setuser({name,password})
    }
  return (
    <>
    <h2>Login</h2>
    <input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder='Enter Username'/>
    <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='Enter Password'/>
    <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Login