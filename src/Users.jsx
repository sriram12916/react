import React from 'react'
import { useParams } from 'react-router-dom'

const Users = () => {
    const {id} = useParams()
  return (
    <>
    <h1>  User Profile</h1>
    <p> This is user id<b>{id}</b></p>
    </>
  )
}

export default Users