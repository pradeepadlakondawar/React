import React, { useState } from 'react'

function DestructringSate() {

    const [user, setUser] = useState({
        name: "pradeep",
        email: "Pradeep.com",
        age: 25
    })

    // destructing
    const {name, email, age} = user;

    // handling function
    const handleAgeUpdate = () => {
        setUser( prev => ({...prev, age: prev.age +1}))
        
    }

  return (
    <div>
      <h2>User Information</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p className='text-blue-800'>Age: {age}</p>
      <button onClick={handleAgeUpdate} className='border-2 border-solid border-green-800 rounded-md p-1'>Increase Age</button>
    </div>
  )
}

export default DestructringSate