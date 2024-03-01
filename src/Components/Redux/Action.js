
export const  increment = (amount=1)=> {
    return {
    type:'INCREMENT',
    payload:amount
}
   
}
export const decrement = (amount=1)=> {
     return {
        type:'DECREMENT',
        payload : amount

     }
    
}



































/*
export const increment = () => {
    return {
      type: 'INCREMENT'
    };
  };
  
  export const decrement = () => {
    return {
      type: 'DECREMENT'
    };
  };
  */