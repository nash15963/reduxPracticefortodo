import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const user = useSelector((state)=>state.user.value)
  return (
    <div>
        <h1>Profile Page</h1>
        <p>name :{user.name}</p>
        <p>age : {user.age}</p>
        <p>email :{user.email}</p>
    </div>
  )
}

export default Profile

// https://www.youtube.com/watch?v=k68j9xlbHHk
// 29:57
