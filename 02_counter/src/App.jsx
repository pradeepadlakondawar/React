import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //using hooks for manipulating the UI
  let [counter,setCounter] =useState(5)

  // let counter =5;
  const addValue=()=>{

    // counter++
    // console.log("value added",Math.random(),counter);
    setCounter(counter+1)
  }
  const removeValue=()=>{
    // setCounter(counter--)
    setCounter((counter==0)? 0 : counter - 1)

  }


  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter Value : {counter}</h2>
      <button
      onClick={addValue}
      >Increase Value</button>
      <br />
      <button
      onClick={removeValue}
      >Decrease Value</button>
    </>
  )
}

export default App
