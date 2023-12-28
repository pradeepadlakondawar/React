import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId}= useParams()
  return (
    <div className='bg-gray-700 text-white text-2xl text-center p-4'>User: {userId}</div>
  )
}

export default User