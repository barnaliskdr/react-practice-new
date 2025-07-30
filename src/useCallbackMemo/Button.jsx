import React from 'react'

const Button = ({handleClick, children}) => {
    console.log("Button rendered--",children);
    console.log(handleClick);
  return (
    
      <button onClick={handleClick}>{children}</button>
    
  )
}

export default React.memo(Button);
//export default Button;
