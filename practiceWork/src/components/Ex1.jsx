import React, { useState } from 'react'

function Ex1() {

    // Provide an example where considering the previous state is crucial, and demonstrate how to correctly update the state in such a scenario.

    const [count, setcount] = useState(0);
    const increment = () => {
        setcount(count+1);
        setcount(count+1);
    }
    const decrement = () => {
        if(count === 0) return
        setcount(count-1)
        setcount(count-1)
    }

    const incrementcorrect = () => {
        setcount((prev) => prev +1);
        setcount((prev) => prev +1);
    }
    const decrementcorrect = () => {
        if(count === 0) return
        setcount((prev)=> prev-1)
        setcount((prev)=> prev-1)
    }


  return (
    <>
    <h1 className='text-red-800'>{count}</h1>
    <button onClick={increment} className='bg-green-400 rounded-md border-solid border-2 p-2 mr-2 border-black'>increment Twice  </button>
    <button onClick={decrement} className='bg-red-300 rounded-md border-solid border-2 p-2 mr-2 border-black'>decrement Twice </button>

    <h1 className='text-green-800'>{count}</h1>
    <button onClick={incrementcorrect} className='bg-green-800 rounded-md border-solid border-2 p-2 mr-2 border-black'>increment Twice correctly </button>
    <button onClick={decrementcorrect} className='bg-red-800 rounded-md border-solid border-2 p-2 mr-2 border-black'>decrement Twice correctly  </button>
    </>
  )
}

export default Ex1