import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'primeflex/primeflex.css';
import Counter from './Classcomponent';
import Functionalcomponent from './Functionalcomponent';
import UseStatewithObjects from './UseStatewithObjects';
import UseStateWithArray from './UseStateWithArray';
import LifecycleRender from './LifecycleRender';
import LifecycleDidmount from './LifecycleDidmount';
import LifecycleShouldupdate from './LifeCycleShouldupdate';
import LifecycleComponentWillUnmount from './LifecycleComponentWillUnmount';
import UseeffectFirst from './UseeffectFirst';
import ComponentA from './contextApiExample/ComponentA';
import UsereducerOne from './UsereducerOne';
import MainApp from './UseReducerwithContext/MainApp';
import UsereducerDataFetch from './UsereducerDataFetch';
import Parent from './useCallbackMemo/Parent';
import ComponentuseMemo from './ComponentuseMemo';
import UserefFocusinput from './UserefFocusinput';
import UserefTwo from './UserefTwo';
import Component1 from './CustomButton/Component1';
import Parenttheme from './CustomButton/Parenttheme';


function App() {
  const [name,setName] = React.useState('Barnali');
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <Functionalcomponent/> */}
      {/* <UseStatewithObjects/> */}
      {/* <UseStateWithArray/> */}

      {/* <LifecycleDidmount name={name}/>
      <button onClick={()=> 
        setName("Barnali Sikdar")
        }>Set Name</button> */}

      {/* <LifecycleRender name={name}/>
      <button onClick={()=> 
        setName("Barnali Sikdar")
        
        }>Set Name</button> */}

      {/* <LifecycleShouldupdate/> */}

      {/* <UseeffectFirst/> */}

      {/* <LifecycleComponentWillUnmount/> */}

      {/* <UseeffectFirst/> */}

      {/* <ComponentA/> */}

      {/* <UsereducerOne/> */}

      {/* <MainApp/> */}

      {/* <UsereducerDataFetch/> */}

      {/* <Parent/> */}

      {/* <ComponentuseMemo/> */}

      {/* <UserefFocusinput/>

      <UserefTwo/> */}

      <Component1/>
      {/* <Parenttheme/> */}
    </div>
  );
}

export default App;
