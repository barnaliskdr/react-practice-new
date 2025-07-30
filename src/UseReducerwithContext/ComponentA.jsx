import React from 'react';
import { useContext } from 'react';
import { counterContext } from './MainApp';

const ComponentA = () => {

  const counter = useContext(counterContext);
   // const { count } = useContext(counterContext);
   console.log(counter.countState)

  return (
        <div>
                {/* {({ count }) => <div>This is ComponentA. Count: {count}</div>} */}
                {/*  */}
                <p>Component A. Count: {counter.countState}</p>
                
        </div>
  )
}

export default ComponentA;


