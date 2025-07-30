import React from 'react'

class ChildComp extends React.Component {
    componentWillUnmount()
    {
        //alert("Component Unmounted");
        console.log("component unmounted");
    }

    render() {
        return (
            <div>
                <h1>Hey I am child component</h1>
            </div>
        )
    }
};

export default ChildComp;
