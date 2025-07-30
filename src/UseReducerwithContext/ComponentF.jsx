import React, { useContext } from 'react';
import { counterContext } from './MainApp';

const ComponentF = () => {

  const counter = useContext(counterContext);


  return (
    <div>
      <h1>from componentF : {counter.countState}</h1>
    </div>
  )
}

export default ComponentF;
