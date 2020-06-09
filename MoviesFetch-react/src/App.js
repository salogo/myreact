import React, { Component } from 'react';
import './App.css';
//import Movies from './components/Movies'
import Books from './components/Books';
import Headers from './components/Header'


class App extends Component {

  constructor() {
    super() // calls the constructor of the Component 
  
    this.state = {
      counter: 0,
      movies: [] ,
      books:[]
    }


  }
/*
    componentDidMount() {
      // http://www.omdbapi.com/?s=batman&apikey=564727fa
      fetch('http://www.omdbapi.com/?s=batman&apikey=564727fa')
      .then(response => response.json())
      .then(result => {
          
          this.setState({
              movies: result.Search
          })      
      })
  }

    <Movies listOfMovies = {this.state.movies} />
  */

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
    .then(response => response.json())
    .then(result => {

      console.log(result)
        
        this.setState({
            books: result
        })      
    })
}

  render() {

    return (
      <div>
         <Headers  Home="Home" MyBooks="My Books" Browse="Browse Community"  Search="Search books"  SignIn="Sign In"  Join="Join" />
         <Books  listOfBooks ={this.state.books}/>

      </div>
    )
  }
  
}

export default App;
