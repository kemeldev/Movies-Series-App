import { useState, useEffect, useRef } from 'react'
import './MoviesOrShows.css'
import { Link } from 'react-router-dom'
import { useSearchContext } from '../context/searchContext'

const urlImage = 'https://image.tmdb.org/t/p/w500'

export function MoviesOrShows ({ dataToRender, isLoading, isError, sortByName }) {
  const [uniqueMovies, setUniqueMovies] = useState([])
  const { whatToSearch } = useSearchContext()
  const fetchedDataRef = useRef([])

  // Use useEffect to update uniqueMovies when dataToRender changes
  useEffect(() => {
    const uniqueMovies = dataToRender.filter((movie, index, array) => {
      return array.findIndex((m) => m.id === movie.id) === index
    })
    setUniqueMovies(uniqueMovies)
    fetchedDataRef.current = uniqueMovies
  }, [dataToRender])

  useEffect(() => {
    const sortMovies = () => {
      let sortedMovies
      if (sortByName) {
        if (whatToSearch === 'tv') {
          sortedMovies = [...uniqueMovies].sort((a, b) => a.name.localeCompare(b.name))
        }
        if (whatToSearch === 'movie') {
          sortedMovies = [...uniqueMovies].sort((a, b) => a.title.localeCompare(b.title))
        }

        setUniqueMovies(sortedMovies)
      } else {
        sortedMovies = fetchedDataRef.current
      }

      setUniqueMovies(sortedMovies)
    }

    sortMovies()
  }, [sortByName])

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
