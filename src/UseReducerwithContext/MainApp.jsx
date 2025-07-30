import React from 'react';
import { useReducer } from 'react';
import ComponentA from './ComponentA';
import ComponentD from './ComponentD';
import ComponentF from './ComponentF';


export const counterContext = React.createContext();

const initialState = 0;

const reducer = (state,action) =>
{
    switch(action.type)
    {
        case "increase":
            return state + 1;
        case "decrease":
            return state - 1;
        case "reset":
            return initialState;
        default:
            return state;
    }
}
const MainApp = () => {

    const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
        <counterContext.Provider value={{countState: count, countDispatch: dispatch}}>
            <ComponentA/>
            <ComponentD/>
            <ComponentF/>
        </counterContext.Provider>
        
        <h1>Count {count}</h1>
        <button onClick={() => dispatch({type:"increase"})}>Increase</button>
        <button onClick={() => dispatch({type:"decrease"})}>Decrease</button>
        <button onClick={() => dispatch({type:"reset"})}>Reset</button>
        {/* <ComponentA/> */}
    </div>
  )
}

export default MainApp;
