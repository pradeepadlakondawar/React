import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj={
    username: "pro",
    age: 22
  }
  let newArr=[1,2,3];
  
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-2'>Tailwind test</h1>
      
      <Card username="chaiaurCode" someObj={newArr}  />
      <Card username="pro" btnText="click on Me"/>
    </>
  )
}

export default App
