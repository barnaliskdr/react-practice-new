import React from "react";

class LifecycleRender extends React.Component //User from React.Component
{
    constructor()
    {
        super();
        console.log("constructor");
        this.state = {
            email: "b@gmail.com"
        }
    }

    render()
    {
        console.log("render method called",this.props);
        return(
            <>
                <h1>User Name: {this.props.name}</h1>
                <button onClick={()=> this.setState({email: "barnalisikdar@gmail.com"})}>Change Email</button>
                <h1>Email: {this.state.email}</h1>
            </>
        )
    }
}

export default LifecycleRender;

//example with props:
//when u are changing the state value of the props name, from app.js by clicking on the setName button, the UI gets rendered
//as the state value is updated. But after the name changes the statevalue remains same and it doesnot get re-rendered anymore.

//same will happen with state, if u do the same here with email example.