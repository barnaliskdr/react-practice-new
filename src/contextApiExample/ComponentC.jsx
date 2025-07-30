import React from 'react';
import { useContext } from 'react';
import { userContext, channelContext } from './ComponentA'; //userContext from './ComponentA';

// const ComponentC = () => {
//   return (
//     <div>
//      <userContext.Consumer>
//        {

//          (name) => {
//            return <h1>My name is {name}</h1>
//          }
//        }
//      </userContext.Consumer>
//     </div>
//   )
// }



const ComponentC = () => {

  const user = useContext(userContext);
  const channel = useContext(channelContext);

  return (
    <div>
      <h2>Component C</h2>
        {user}
        <br/>
        {channel}
      {/* {user.value} */}
     {/* <userContext.Consumer>
       {
          (name) => {
            return (
              <channelContext.Consumer>
                {(channelval) => (
                  <h1>My name is {name}. My fav dishes are: {channelval}</h1>
                )}
              </channelContext.Consumer>
            );
          }
       }
     </userContext.Consumer> */}
    </div>
  )
}




export default ComponentC;
