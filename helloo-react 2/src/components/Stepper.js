import React, { Component } from 'react';
//import './App.css';

class Stepper extends Component {

  constructor() {
    super() 
    console.log(this) 

    this.state = {
      counter: 0
    }


  }

  handleIncrement = () => {
    this.setState({
      counter: this.state.counter + 1 
    })
  }

  handleIncrement() {
   
    this.setState({
      counter: this.state.counter + 1 
    })

  }
  handleDecrement = () => {
    this.setState({
      counter: this.state.counter - 1 
    })
  }


  render() {

    return (
      <div className="Stepperbox">
        <button onClick = {this.handleIncrement}>+</button>  
        <h1>{this.state.counter}</h1> 
        <button onClick = {this.handleDecrement}>-</button>
      </div>
    )
  }
  
}

export default Stepper;