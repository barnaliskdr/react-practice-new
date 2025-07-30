import React from 'react'

const AsyncinuseEffect = () => {

    useEffect(()=>
    {
        async function getUserDetails()
        {
            try
            {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await response.json();
                console.log(data);
            }
            catch(error)
            {
                console.log("E:",error)
            }
        }
        getUserDetails();

        return(
            console.log("Cleanup function called")
            // Cleanup function if needed
            // This function will be called when the component unmounts
            // This function will be called before the effect runs again
        )
    },[userId]);
  return (
    <div>
      
    </div>
  )
}
//Why not make useEffect async directly?
// You cannot write:
// useEffect(async () => { ... }); 
// Because:

// useEffect expects the callback to return either nothing or a cleanup function — not a Promise.

// An async function always returns a Promise, which React won't wait for and can cause bugs or warnings.
export default AsyncinuseEffect;
