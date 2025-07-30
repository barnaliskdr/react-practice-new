import React from 'react';
import ChildComp from './ChildComp';

class LifecycleComponentWillUnmount extends React.Component {
    constructor()
    {
        super();
        this.state = {
            show: true
        }
    }
   


    render()
    {
        return(
            <div>
                <button onClick={() => this.setState({show: !this.state.show})}>Show/Hide</button>
                {
                    this.state.show ? <ChildComp/> : <h1>Component Not present</h1>
                }
            </div>
        )
    }
}

export default LifecycleComponentWillUnmount;