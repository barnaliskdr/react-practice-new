import React, { useEffect,useRef } from 'react'

const UserefFocusinput = () => {

  const inputRef = useRef(null);
  
  const handleButtonClick = () => {
    const val =  Math.floor(Math.random() * 100);
    inputRef.current.value = val;
  }
  useEffect(() => {
    inputRef.current.focus()
   }, [])

  return (
    <div>
      <input ref={inputRef} type='text'/>
      <button onClick={handleButtonClick}>Focus</button>
    </div>
  )
}

export default UserefFocusinput;
