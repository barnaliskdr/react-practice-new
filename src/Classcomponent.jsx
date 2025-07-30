import React, { Component } from 'react';

class Classcomponent  extends Component {
  constructor() {
    super(); 
    this.state = { count: 0 };
  }

  increment = () => {
    //this.setState({ count: this.state.count + 1 });
    this.setState(prevState =>
      {
        return {
          count: prevState.count + 1
        }
      }
    )
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Classcomponent;


// Classcomponent extends Component (from React), so it inherits all the functionality of React's Component class.

// super() calls the constructor of the parent class (Component) and sets up the this context. super() lets you use all the component of parent class
// within the child class.

// Without super(), trying to use this (like this.state = { count: 0 }) will throw a ReferenceError, because this hasn't been initialized yet.
//super() is required in a constructor when the class extends another class.
//It enables you to use this inside the constructor.