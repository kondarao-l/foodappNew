//

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from './Action'

function Counter() {
    const count = useSelector(state=>state.count)
    const dispatch = useDispatch()
  return (

    <div>
        <h1>Counter : {count} </h1>
        <button onClick={()=>dispatch(increment(5))}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
     </div>
  )
}

export default Counter











/*
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement } from './Action'

const Counter = () =>{
const count = useSelector(state=>state.count)
const dispatch = useDispatch()

  return (
    <div> 
        <h1>Counter :{count} </h1>
        <button  style={{marginRight:'5px'}} onClick={()=>dispatch(increment(5))}>Increment</button>
        <button onClick={()=>dispatch(decrement(2))}>Decrement</button>
     </div>
  )
}

export default Counter
*/