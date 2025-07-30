import React,{useState} from 'react';
import Component1 from './Component1';


export const ThemeContext = React.createContext();
const Parenttheme = () => {

    const [theme, setTheme] = useState('pink');

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div style={{backgroundColor: theme, justifyContent: "center"}}>
        <Component1/>
      </div>
    </ThemeContext.Provider>
    // <div style={{ backgroundColor: "pink", minHeight: "100vh" }}>
    //     <h1>Hello</h1>
    // </div>
  )
}

export default Parenttheme;
