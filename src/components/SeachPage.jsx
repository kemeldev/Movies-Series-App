import { useEffect, useState } from 'react'
import { SearchForm } from './SearchForm'
import { Movies } from './Movies'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTE2YTI4NGQzMTk0MzcyYTg3OTM1ZDk4ZjcxOGZjMiIsInN1YiI6IjY1NDdlZDc5NDFhNTYxMzM2YzVkMzg5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fK_ywKO7h7UwP38WLlLyscKWl5b-D80JynV4JIyp-54'
  }
}

export function SearchPage () {
  const [movies, setMovies] = useState([])
  console.log(movies)

  const initialMoviesFetch = async () => {
    const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc', options)
    const { results } = await response.json()
    setMovies(results)
  }

  useEffect(() => {
    initialMoviesFetch()
  }, [])

  return (
    <>
      <main>
        <SearchForm />
        <Movies
          movies={movies}
        />

      </main>
    </>
  )
}
