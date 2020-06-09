import React, { Component } from "react";


class Books extends Component {
  
    render() {
       
       let bookItems = this.props.listOfBooks.map((book, index) => {
           
            return <div key={index}>
                      <b> {book.author} </b>
                      <img  src={"https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/"+book.imageLink} alt="noimages" />   
                   </div>
        })

        return (
            <div className="boxes">  
               <div className="images">{bookItems}</div>
            </div>
        )
    }
}

export default Books 
