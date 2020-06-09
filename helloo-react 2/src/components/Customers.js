import React, { Component } from "react";
//import '../Customers.css';

class Customers extends Component {

    render() {

        // JSX - JavaScript and XML 
      let nameItems = this.props.names.map((name,index)=> {
            return <li key={index} className="name-item">{name}</li>
        })


        /// display a list 
        return (
            <ul>{nameItems}</ul>
        )

    }

}

export default Customers 