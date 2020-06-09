import React, { Component } from "react";


class Movies extends Component {

   // constructor() {
   //     super() 
  //  }

    render() {

       let movieItems = this.props.listOfMovies.map(movie => {
            return <li key = {movie.imdbID}>
                      <b> {movie.Title} </b>
                      <i>{movie.Year} </i>
                      <img style={{width: "100px"}} src={movie.Poster} alt="imag" />
                   </li>
        })

        return (
            <ul>{movieItems}</ul>
        )
    }
}

export default Movies 