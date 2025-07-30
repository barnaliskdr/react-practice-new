import React from 'react'

const Stringoperations = () => {

    const myname = "Barnali-cag";
    // const newName = myname.
    console.log(myname.length);
    console.log(myname.charAt(8));
    console.log(myname.slice(0,7));
    console.log(myname.substring(-3,3));
    console.log("slice[-1,1]: ",myname.slice(-3,3));
  return (
    <div>
      Hiii
    </div>
  )
}

export default Stringoperations
