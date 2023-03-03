import React, { useState, useEffect } from 'react'
import MoviesComponent from "../components/MoviesComponent";
import axios from "axios";

function Movies() {

    const [movies, setMovies] = useState([]);
    const url = "http://localhost:3000/movies";
    // console.log(movies);

    useEffect(() => {
          axios.get(url).then((res) => {
         setMovies(res.data)
        })
      },[])

  return (
    <div>
        <h1>My Top 10 Movies</h1>
        <div>
        {Object.values(movies).map(movies  => {
            {/* console.log(movies); */}
            return (
                <MoviesComponent  movies={movies} />
            )
        })
        }
        </div>
    </div>
  )
}

export default Movies