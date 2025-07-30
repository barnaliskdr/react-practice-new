import React from 'react';
import  { useState,useEffect } from 'react'; //useState

const UseeffectFirst = () => {
    const [count,setCount] = useState(0);

    const increment = () =>
    {
        console.log("Hii");
        setCount(count+1);
    }
    useEffect(()=>
    {
        const timerId = setInterval(() => {
            console.log("Hello from useEffect");
        }, 1000);

        return () => {// Cleanup function
          // This function will be called when the component unmounts
          // This function will be called before the effect runs again
          // For example, if you set up a timer, you can clear it here  
          // This prevents memory leaks by cleaning up resources
          // If you don't clear the timer, it will keep running even after the component is unmounted/re-rendered.
          clearInterval(timerId);
          console.log("Cleanup function called, timer cleared");
        }
    })
    useEffect(()=>
    {
        document.title = `You have clicked ${count} times`;
    },[count])

  return (
    <div>
        <h1>Clicked {count} time</h1>
      <button onClick={increment}>Click Me</button>
    </div>
  )
}

export default UseeffectFirst;
// [ ] means only once the use Effect will be called after the render

// [ count ] means use Effect will be called each time the state gets updated

// No [ ] means, will be executed after each rerender


// "useEffect is a powerful hook that allows functional components to manage side effects like API calls, DOM updates, 
// and setting up timers and interacting with external APIs. It replaces class lifecycle methods(componentDidMount,componentDidUpdate,
// componentWillUnmount) and supports cleanup to avoid memory leaks.
// I use useEffect regularly to ensure my components behave predictably and efficiently."


