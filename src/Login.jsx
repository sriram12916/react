import React from 'react'
import { useNavigate } from 'react-router-dom'



const Login = () => {
 const navigate = useNavigate()
    const onsubmit = ()=>{

        navigate('/dashboard')
    }
  return (
    <>
    <h3>Login</h3>

    <button onClick={onsubmit}>Login</button>
    </>
  )
}

export default Login