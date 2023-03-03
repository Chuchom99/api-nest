import React from 'react'

function MoviesComponent (props) {
  return (
    <div>
    <p>{props.movies.rank}</p>
    <p>{props.movies.title}</p>
    <img src={props.movies.img} />
    </div>
    
  )
}

export default MoviesComponent