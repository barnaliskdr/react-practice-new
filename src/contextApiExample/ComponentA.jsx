import React, { useState } from 'react'
import ComponentB from './ComponentB'


export const userContext = React.createContext();
export const channelContext = React.createContext();

const ComponentA = () => {
  const [food, setFood] = useState(['Pizza', 'Burger', 'Noodles'])

  return (
    <div className="bg-blue-100 text-blue-900 font-bold p-3 border-round">
      <userContext.Provider value='Barnali Sikdar'> 
        <channelContext.Provider value={food}>
            <ComponentB/>
        </channelContext.Provider>
      </userContext.Provider>
    </div>
  )
}

export default ComponentA;
