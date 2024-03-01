// child component
import React,{useContext, useState} from 'react'

import { store } from './Context1'


function Context() {
  const [data,setData] = useContext(store)
  const [name,setName] = useState('')
  
  const formHandler = (e)=> {
    e.preventDefault()
    setData([...data,{brandName:name}])
  }
 const changeHandler = (e)=>{
    setName(e.target.value)

  }
  return (
    <div>
       
      <h1>Value :{data.length} </h1> 
      {data.map(item=>(
        <h3>
          {item.brandName}
           </h3>
      ))} 
       <form onSubmit={formHandler}>
          <input type='text' onChange={changeHandler}/>
          <input type='submit' value='add'/>
          </form>
          
        </div>
  )
}

export default Context;

/*
import React, { useContext } from 'react';
import { store } from '../App';

function Context() {
  const [data, setData] = useContext(store);

  return (
    <div>
      <h1>Value: {data}</h1>
    </div>
  );
}

export default Context;
*/