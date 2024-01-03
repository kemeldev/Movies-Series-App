import { Link } from 'react-router-dom'
import './TestReactQuery.css'
import { Navbar } from './Navbar'
import { useQuery } from '@tanstack/react-query'
import { fetchData } from '../services/fetchMoviesOrShows'
import { useApi } from '../context/apiContext'

export function TestReactQuery () {
  const { isLoading, isError, isSuccess, data: dataMovies = [] } = useQuery({
    queryKey: ['moviesFetched'],
    queryFn: async () =>
      fetchData({ pageParam: 1, movieOrtv: 'movie' })
  })

  // Store the data in the queryClient
  // import { useQuery, useQueryClient } from '@tanstack/react-query'
  // const queryClient = useQueryClient()
  // queryClient.setQueryData('moviesFetched', dataMovies)

  const { urlPosterImage } = useApi()

  console.log(dataMovies.nextCursor, typeof (dataMovies.nextCursor))

  return (
    <>
      <header className='homeContainer'>
        <Navbar
          popularMovies={dataMovies}
        />
        <h1>Test React Query</h1>
        <h2>Showing Popular</h2>

      </header>
      <main className={`homeMovieListContainer ${isSuccess ? 'loaded' : ''}`}>
        {isLoading && <strong>Loading data</strong>}
        {isError && <strong>Error fetching data</strong>}
        <div className='homeMovieList'>
          {
          dataMovies.results && dataMovies.results.length > 0
            ? (
                dataMovies.results.slice(0, 5).map((item, index) => {
                  return (
                    <div
                      className='homeMovie'
                      key={item.id}
                    >
                      <Link
                        to={{
                          pathname: `/search-page/movies-tvshows/${item.id}`
                        }}
                      >
                        <img
                          src={urlPosterImage + item.poster_path}
                          width={200}
                          alt={item.title}
                        />
                      </Link>
                      <h3>{item.title}</h3>
                      <h3>{item.name}</h3>
                    </div>
                  )
                })
              )
            : null
    }
        </div>
      </main>

    </>
  )
}
