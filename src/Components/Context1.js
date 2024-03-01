import { createContext } from 'react';

import {useState} from 'react'
import Context from './Context';

export const store = createContext()

function Context1() {
  const mobiles = [
    {
      brandName : 'Idea'
    },
    {
      brandName : 'Nokia'
    },
    {
      brandName : 'Jio'
    },
    {
      brandName : 'Airtel'
    }
  ]
  const [data,setData] = useState(mobiles)
 return (
    <div >
      { <store.Provider value={[data,setData]}>
         <center>
      <Context/>
      
      </center>
      </store.Provider> }

     </div>
  );
}

export default Context1;
