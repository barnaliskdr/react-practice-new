import React, { use, useContext } from 'react';
import ComponentC from './ComponentC';
import {userContext, channelContext} from './ComponentA'; 

const ComponentB = () => {

  const user = useContext(userContext);
  const channel = useContext(channelContext);

  return (
    <div>
      <h1>Component B</h1>
      {user}
      {channel}
      <ComponentC/>
    </div>
  )
}

export default ComponentB;
