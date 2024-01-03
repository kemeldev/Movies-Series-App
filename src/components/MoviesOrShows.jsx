import './MoviesOrShows.css'
import { Link } from 'react-router-dom'

const urlImage = 'https://image.tmdb.org/t/p/w500'

export function MoviesOrShows ({ dataToRender, isLoading, isError }) {
  return (
    <main className='movieOrShowPage'>
      {isLoading && <strong>Loading data</strong>}
      {isError && <strong>Error fetching data</strong>}
      <div className='movieOrShowContainer'>
        {
          dataToRender && dataToRender.length > 0
            ? (
                dataToRender.map((movie, index) => {
                  return (
                    <div
                      className='movieOrShow'
                      key={movie.id}
                    >
                      <Link
                        to={{
                          pathname: `/search-page/movies-tvshows/${movie.id}`,
                          state: { dataToRender } // Pass the prop in the state
                        }}
                      >
                        <img
                          src={urlImage + movie.poster_path}
                          width={200}
                          alt={movie.title}
                        />
                      </Link>
                      <h3>{movie.title}</h3>
                      <h3>{movie.name}</h3>
                    </div>
                  )
                })
              )
            : null
    }
      </div>
    </main>

  )
}
