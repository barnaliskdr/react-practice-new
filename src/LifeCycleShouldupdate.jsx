import React from 'react';
 
class LifecycleShouldupdate extends React.Component {
  constructor() {
    super();
    this.state = {count: 0};
  }
 
  shouldComponentUpdate(nextProps, nextState) {
    // return nextState.count % 2 === 0;
    console.log("shouldComponentUpdate");
    if(this.state.count>5 && this.state.count<10)
    {
        return true;
    }
  }
 
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.setState({count: this.state.count + 1})}>Increment</button>
      </div>
    );
  }
}
 
export default LifecycleShouldupdate;