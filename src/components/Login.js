import React from 'react'
import { login } from "../components/feature/user.js";
import { useDispatch } from 'react-redux'

const Login = () => {
  const dispatch = useDispatch()
  
  return (
    <div>
        <button onClick={
          ()=>{
            dispatch(
            login(
              {name: "33", age: 0, email: "12"}
            )
            )
          }
        }>Login</button>
    </div>
  )
}

export default Login