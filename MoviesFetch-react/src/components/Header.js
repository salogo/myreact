import React, { Component } from "react";


class Header extends Component {
  
    render() {
       
       
        
        return (
            <div className="Header" >  
               <div> {this.props.Home}</div>
               <div> {this.props.MyBooks} </div>
               <div> {this.props.Browse}</div>
               <div>  {this.props.Community}</div>
               <div>  {this.props.Search}</div>
               <div> {this.props.SignIn}</div>
               <div>  {this.props.Join}</div>

            </div>
        )
    }
}

export default Header 