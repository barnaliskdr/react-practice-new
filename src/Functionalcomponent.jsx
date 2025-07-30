// import React from 'react';
// import { useState } from 'react';

// const Functionalcomponent = () => {
//     const [count, setCount] = useState(0);
//     const incrementCount = () => {
//         setCount(count+1);
//     }

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={incrementCount}>increment</button>
//     </div>
//   )
// }

// export default Functionalcomponent;

//Here, count is the current state value, and setCount is the updater function provided by React inside useState hook.
// The argument passed to useState, in this case 0, is the initial state.
// When the user clicks the "increment" button, incrementCount is triggered, which calls setCount(count + 1). 
// This updates the state, and React re-renders the component to reflect the new count.
// useState is part of the React Hooks API, introduced in React 16.8, and it allows functional components to maintain
// internal state.
// In real projects, I’ve used useState not just for primitives like numbers and strings, but also for managing form values, 
// toggles, lists, and complex nested objects — always keeping in mind the immutable nature of state and proper update patterns.

import React, { useState } from 'react';
const Functionalcomponent = () => {

  const initialCount = 0;
  const [count, setCount] = useState(0);

  const incrementByFive = () => {
    setCount(prev => prev + 5);
  }

  return (
    <>
     <h1>Count: {count}</h1>
     <div>
       <button onClick={() => setCount(count+1)}>Increment</button>
       <button onClick={() => setCount(count-1)}>Decrement</button>
       <button onClick={() => setCount(initialCount)}>Reset</button>
       <button onClick={incrementByFive}>IncrementFive</button>
     </div>
    </>
  )
}

export default Functionalcomponent;