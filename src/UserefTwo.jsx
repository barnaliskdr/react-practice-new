import React,{useState, useEffect, useRef} from 'react'
// import React, { Component } from 'react'

// export class UserefTwo extends Component {

//     interval
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          timer: 0
//       }
//     }

//     componentDidMount()
//     {
//         this.interval = setInterval(() => {
//             this.setState({timer: this.state.timer + 1});
//         }, 1000);
//     }
    
//     componentWillUnmount()
//     {
//         console.log("Component unmounted");
//         clearInterval(this.interval);
//     }

//   render() {
//     return (
//       <div>
//         Class Timer - {this.state.timer}
//         <button onClick={() => clearInterval(this.interval)}>Clear Timer</button>
//       </div>
//     )
//   }
// }


const UserefTwo= () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(); // mutable container to store previous value

  useEffect(() => {
    console.log("Previous Count:", prevCountRef.current);
    prevCountRef.current = count; // store current count in ref after each render
  });

  return (
    <div>
      <h2>Current Count: {count}</h2>
      <h3>Previous Count: {prevCountRef.current}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};




//It is used to create a generic container, that is used to hold the mutable value similar to 
//instance properties of the class component.

export default UserefTwo;