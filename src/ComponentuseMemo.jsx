import React,{ useState, useMemo } from 'react'

const ComponentuseMemo = () => {

  const [counterOne,setCounterOne] = useState(0);
  const [counterTwo,setCounterTwo] = useState(0);

  const incrementOne = () => {
    console.warn("incrementOne called");
    setCounterOne(counterOne+1);
  }

  const incrementTwo = () =>
  {
    console.log("incrementTwo called");
    setCounterTwo(counterTwo+1);
  }

  // this generally executes every time page loads. with useMemeo() Now we will tell react
  // not to calculate counterOne when counterTwo changes. useMemo() will be invoked the value
  //when the dependencies has changed. when the dependency value doesnot get changed it will
  //use the cached value.


   const isEven = useMemo(() => {
    let i = 0;
    console.log("isEven called");
    while (i < 200000000) i++; // simulate heavy computation
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <div>
        <button onClick={incrementOne}>Increment One -- {counterOne}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Increment Two-- {counterTwo}</button>
      </div>
    </div>
  )
}

export default ComponentuseMemo
