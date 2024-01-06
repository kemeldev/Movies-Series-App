import { useState, useEffect } from 'react'
import './MoviesOrShows.css'
import { Link } from 'react-router-dom'

const urlImage = 'https://image.tmdb.org/t/p/w500'

export function MoviesOrShows ({ dataToRender, isLoading, isError }) {
  const [uniqueMovies, setUniqueMovies] = useState([])

  // Use useEffect to update uniqueMovies when dataToRender changes
  useEffect(() => {
    const uniqueMovies = dataToRender.filter((movie, index, array) => {
      return array.findIndex((m) => m.id === movie.id) === index
    })
    setUniqueMovies(uniqueMovies)
  }, [dataToRender])

  return (
    <main className='movieOrShowPage'>
      {isLoading && <strong>Loading data</strong>}
      {isError && <strong>Error fetching data</strong>}

      <div className='movieOrShowContainer'>
        {
          uniqueMovies && uniqueMovies.length > 0
            ? (
                uniqueMovies.map((movie) => (
                  <div
                    className='movieOrShow'
                    key={movie.id}
                  >
                    <Link
                      to={`/search-page/movies-tvshows/${movie.id}`}
                      state={{ dataToRender }}
                    >
                      <img
                        src={urlImage + movie.poster_path}
                        width={200}
                        alt={movie.title || movie.name}
                      />
                    </Link>
                    <h3>{movie.title || movie.name}</h3>
                  </div>
                ))
              )
            : null
        }
      </div>
    </main>
  )
}
