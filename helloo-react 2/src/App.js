import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import NaveBar from './components/NaveBar';
import Stepper from './components/Stepper';
import CurrentReview from'./components/CurrentReview';
import ContentBody from './components/ContentBody'

class App extends Component {
  
  render() {

    // created an array of customers
  //  let myCustomers = ["Alex","John","Mary"]
  // <Customers names = {myCustomers} />

    return (
      <div>
      <Stepper  />
      

      <NaveBar  nave={""}/>
      <CurrentReview /> 
      <ContentBody likes={" 12 comments   124 likes "} hello={"Hello Watchkit"} /> 
      <ContentBody likes={" 15 comments    45 likes"} hello={"Introduction to Swift"} /> 
      </div>
    )
  }

}

export default App;