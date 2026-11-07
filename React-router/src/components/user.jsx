import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams();
  return (
    <div
    className='text-red-800 text-4xl text-center'
    >user:{userid}</div>
  )
}

export default User