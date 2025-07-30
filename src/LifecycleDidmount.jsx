import React from "react";

class LifecycleDidmount extends React.Component {
    constructor() {
      super(); 
      console.log("Constructor");
      this.state = { title: "Sikdar", count: 0 };
    }
    componentDidMount() {
        console.log("Component Did Mount");
    }
    componentDidUpdate(preProps, preState,snapshot) {
        console.log("Component Did Update");
        console.log("prestate--->",preState);
        console.log("preprops--->",preProps);
        console.log("snapshot--->",snapshot);
        console.log("this.props--->",this.props);
        if(preProps.name === this.props.name) {
            window.alert("Same Name");
        }
        //called only when the component is updated. Hence we cant do any state update inside 
        //this method, because if we do so, it will go into an infinite loop.

        //snapshot value comes undefined until and unless you dont call getSnapshotBeforeUpdate() method previously.
    }
    increment = () => {
      this.setState({ count: this.state.count + 1 });
    }

    render() {
      //interview bites: u cant do state update here as well because it will also take it into a infinite loop as render gets called every time.
      return (
        <div>
            {console.log("Render")}
          <p>Count: {this.state.count}</p>
          <p>Name: {this.props.name}</p>
          <button onClick={this.increment}>Increment</button>
        </div>
      );
    }
  }

export default LifecycleDidmount;

//construct
//cleanUp function
//lazyloading
//router
//webpack why it is bundler? what it does?
//package.lockjson ---> transitive dependency
//
