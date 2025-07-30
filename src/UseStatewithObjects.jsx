import React,{useState} from 'react';

const UseStatewithObjects = () => {
    const [name, setName] = useState({ firstName: '', lastName: '' });

  return (
    <div>
      <h1>
          {name.firstName} {name.lastName} 
      </h1>
      <form>
        <input
          type="text"
          label = 'First Name'
          value={name.firstName}
          onChange={(e) => setName({...name, firstName: e.target.value })}
          //here spread operator means copy every property of the name object and just overwrite the firstName
        />
        <input
           type='text'
           label = 'Last Name'
           value = {name.lastName}
           onChange = {(e)=> setName({
            ...name,
            lastName: e.target.value
           })}
           // //here spread operator means copy every property of the name object and just overwrite the lastName
         />
      </form>
    </div>
  )
}

export default UseStatewithObjects;
