



function Reducer(state = {count:0},action) {
    const {type,payload} = action
    switch(type){
        case "INCREMENT" :
            return {count:state.count+payload};
        case 'DECREMENT' : 
             return {count:state.count-2};
         default : 
            return state



    }
 
}

export default Reducer


/*
const Reducer = (state = {count:0},action)=> {
    const {type,payload} = action
  switch(type){
    case 'INCREMENT' :
        return {count:state.count+Math.ceil(Math.random()*10)} ;
    case 'DECREMENT' : 
       return {count:state.count-payload} ;
    default :
      return state;


  }

}


export default Reducer

*/











/*
// reducer.js
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;

*/