import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTE2YTI4NGQzMTk0MzcyYTg3OTM1ZDk4ZjcxOGZjMiIsInN1YiI6IjY1NDdlZDc5NDFhNTYxMzM2YzVkMzg5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fK_ywKO7h7UwP38WLlLyscKWl5b-D80JynV4JIyp-54'
  }
}

// const bigImageURL = 'https://image.tmdb.org/t/p/w1280'

export function MovieDetails () {
  const { id } = useParams()
  const [movieDetails, setMovieDetails] = useState([])

  const fetchMovieDetails = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/848326?language=en-US', options)
    const results = await response.json()
    setMovieDetails(results)
  }

  useEffect(() => {
    fetchMovieDetails()
  }, [])

  return (
    <div className='movieDetails'>
      <h3>Movie Name {movieDetails.belongs_to_collection.name}</h3>
      <p>ID de la pelicula que queremos los detalles: {id}</p>
      {/* <img
        src={bigImageURL + movieDetails.backdrop_path}
        alt={movieDetails.belongs_to_collection.name}
      /> */}
    </div>
  )
}
