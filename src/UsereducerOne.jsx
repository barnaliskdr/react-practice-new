import React from 'react';
import { useReducer } from 'react';

//step:2
// const initialState = 0;
const initialState = {
    firstCounter: 0,
    secondCounter: 10
};
//step:3
// const reducer = (state, action) => {
//     //reducer function accepts current state as input and returns new State
//     //depending upon the action value.
//     switch(action)
//     {
//         case 'increment':
//             return state + 1;
//         case 'decrement':
//             return state - 1;
//         case 'reset':
//             return initialState;
//         default:
//             return state;
//     }
// }

const reducer = (state, action) => {
    //reducer function accepts current state as input and returns new State
    //depending upon the action value.
    switch(action.type)
    {
        case 'increment':
            return {...state, firstCounter: state.firstCounter + 1};
        case 'decrement':
            return {...state, firstCounter: state.firstCounter - 1};
        case 'increment2':
            return {...state, secondCounter: state.secondCounter + 5};
        case 'decrement2':
            return {...state, secondCounter: state.secondCounter - 5};
        case 'reset':
            return  initialState;
        default:
            return state;
    }
}
const UsereducerOne = () => {

    //step:1
    const [count,dispatch] = useReducer(reducer, initialState);
    //Call to useReducer() returns a pair of values. dispatch() is a fn capable of accepting an 
    //action and updating the state depending upon the action value.
  return (
    <div>
      <h1>Click Count(1st Couter): {count.firstCounter}</h1>
      <h1>Click Count(2nd Couter): {count.secondCounter}</h1>
      <button onClick={()=> dispatch({type:'increment'})}>Increment</button> 
      <button onClick={()=> dispatch({type:'decrement'})}>Decrement</button>
      <button onClick={()=> dispatch({type:'reset'})}>Reset</button>
      <button onClick={()=> dispatch({type:'increment2'})}>Increment2</button>
      <button onClick={()=> dispatch({type:'decrement2'})}>Decrement2</button>
    </div>
  )
}

export default UsereducerOne;
