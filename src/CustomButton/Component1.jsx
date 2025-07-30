import React from 'react'
import MyButton from './Button'
import { ThemeContext } from './Parenttheme';

const Component1 = () => {

  const theme = React.useContext(ThemeContext);

  const handleClick = () => {
    if(theme.theme === "black")
    theme.setTheme("pink");
    else
    {
      theme.setTheme("black");
    } 

    console.log('clicked');
  }

  return (
    <div>
      <MyButton
        variant = "success"
        size = "lg"
        onClick = {handleClick}
      >
            Change Theme
      </MyButton>
      {/* <button  style={"bg-blue-600 text-white hover:bg-blue-700 px-2 py-1"></button> */}
      {/* Static positioned */}
  <div style={{ position: "static", backgroundColor: "lightblue" }}>
    This is static (default) positioned
  </div>

  {/* Relative positioned */}
  <div style={{ position: "relative", top: 20, left: 30, backgroundColor: "lightgreen" }}>
    This is relatively positioned
  </div>

  {/* Absolute positioned inside relative container */}
  {/* <div style={{ position: "relative", height: 150, backgroundColor: "lightgrey" }}>
    <div style={{ position: "absolute", top: 20, left: 40, backgroundColor: "orange" }}>
      This is absolutely positioned inside relative parent
    </div>
     <div style={{ position: "absolute", top: 60, right: 80, backgroundColor: "pink" }}>
      This is absolutely positioned inside relative parent
    </div>
  </div> */}

  {/* Fixed positioned */}
  <div style={{ position: "fixed", bottom: 10, right: 10, backgroundColor: "lightcoral", padding: 10 }}>
    Fixed at bottom-right of screen
  </div>

  {/* Sticky positioned */}
  {/* <div style={{ height: 1000, overflow: "auto" }}>
    <div style={{ position: "sticky", top: 0, backgroundColor: "yellow", padding: 10 }}>
      Sticky Header (sticks at top when scrolling)
    </div>
    <p>Scroll down to see sticky behavior...</p>
    <p style={{ marginTop: 900 }}>End of content</p>
  </div> */}
    </div>
  )
}

export default Component1
