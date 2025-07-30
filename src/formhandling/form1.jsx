import React,{useState} from 'react'

const form1 = () => {

    const [myName, setMyName] = useState('');
    const [age, setAge] = useState();
    const [data,setData] = useState({name: '', age: ''});
    const handleSubmit = (e) => {
        e.preventDefault();
        setData({...data, name: myName, age: age});
    }
  return (
    <div>
      <form>
        <input type="text"
        name="Name"
        value={name}
        onChange={(e) => console.log(e.target.value)}
        placeholder = "Enter your Name"
        />
        <input type="number"
        name="Age"
        value={age}
        onChange={(e) => console.log(e.target.value)}
        placeholder = "Enter your Name"
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default form1
