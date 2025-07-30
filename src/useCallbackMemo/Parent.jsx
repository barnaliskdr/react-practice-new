import React from 'react';
import { useState,useCallback } from 'react'; //step 1: for implementing useCallback
import Count from './Count';
import Title from './Title';
import Button from './Button';

const Parent = () => {
    const [age,setAge] = useState(20);
    const [salary,setSalary] = useState(10000);

    const incrementAge = useCallback(()=>
    {
        console.log('age incremented');
        setAge(age+1);
    }, [age]); //step 2: useCallback accepts 2 functions as arguments, 1st is the function to be called and 
    //2nd is the dependency array.

    // const incrementAge = ()=>
    // {
    //     console.log('age incremented');
    //     setAge(age+1);
    // }

    const incrementSalary = useCallback(()=>
    {
        console.log('salary incremented');
        setSalary(salary+1000);
    },[salary]);

  return (
    <div>
      <Title/>
      <Count text="Age" count={age}/>
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary}/>  
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default Parent;




// so, it is like:

// if we dont use React.memo and useCallback, then on change of age, the Parent component gets rendered creating a new copy 
// of both incrementSalary and incrementAge. Which again cause unnecessary rerender of  
// <Button handleClick={incrementSalary}>Increment Salary</Button>. 
// NOW ,with React.memo and useCallback ; useCallback firstly prevents creation of new copy of incrementSalary, rather returns 
// memoized version of it; when incrementAge is called or age changes.
// And Because of React.memo,  Button component only gets called when a new copy of props function is created and Count component
// only gets called when either age value changes or salary value changes.


// With useCallback and React.memo:
// ✅ useCallback memoizes the function, so unless its dependency changes:
// incrementSalary stays the same reference.
// Thus, when age changes, incrementSalary doesn’t change → avoids triggering render of the salary Button.
// ✅ React.memo wraps Button and Count, making them only re-render when props actually change.
// So Button only re-renders when handleClick changes reference.
// Count only re-renders when count value or text string changes


// In JavaScript, functions are objects. When you assign a function to a variable, you're not copying its code — you're assigning a reference to it in memory.
// - Imagine every function lives somewhere in memory (like a house).
// - A function reference is like the address of that house.
// - If two variables have the same reference, they point to the same function (same house).
// - If two functions do the same thing but are declared separately, they have different references (different houses).