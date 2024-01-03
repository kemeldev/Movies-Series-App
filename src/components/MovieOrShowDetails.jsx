import { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTE2YTI4NGQzMTk0MzcyYTg3OTM1ZDk4ZjcxOGZjMiIsInN1YiI6IjY1NDdlZDc5NDFhNTYxMzM2YzVkMzg5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fK_ywKO7h7UwP38WLlLyscKWl5b-D80JynV4JIyp-54'
  }
}

const bigImageURL = 'https://image.tmdb.org/t/p/w1280'
const urlPosterImage = 'https://image.tmdb.org/t/p/w500'

export function MovieOrShowDetails () {
  const { id } = useParams()
  const [movieDetails, setMovieDetails] = useState()
  const [tvDetails, setTvDetails] = useState()
  const location = useLocation()
  const { moviesOrShows } = location.state
  console.log(moviesOrShows)

  const data = moviesOrShows ? movieDetails : tvDetails

  const fetchMovieDetails = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
    const results = await response.json()
    setMovieDetails(results)
  }

  const fetchTvShowDetails = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?language=en-US`, options)
    const results = await response.json()
    setTvDetails(results)
  }

  useEffect(() => {
    fetchMovieDetails()
    fetchTvShowDetails()
  }, [])

  return (
    <div className='movieDetails'>
      {
       data && Object.keys(data).length > 0
         ? (
           <div>
             <h3>Movie Name {data?.title}</h3>
             <img
               src={urlPosterImage + data?.poster_path}
               width={200}
               alt='Pendiente'
             />
             <img
               src={bigImageURL + data?.backdrop_path}
               alt='Pendiente'
             />
           </div>
           )
         : null
    }
    </div>
  )
}
