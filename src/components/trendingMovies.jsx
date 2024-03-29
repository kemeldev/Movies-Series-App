import { Link } from 'react-router-dom'
import { useFetch } from '../Hooks/useDataFetched'
import { useApi } from '../context/apiContext'
import { useEffect } from 'react'

export function TrendingMovies ({ setBackgroundImg }) {
  const queryKey = ['trendingMovies']
  const url = 'https://api.themoviedb.org/3/trending/movie/week?language=en-US'
  const { isError, isLoading, isSuccess, data, refetch } = useFetch(url, queryKey)
  const { urlPosterImage } = useApi()

  const dataToRender = data.results

  useEffect(() => {
    refetch()
  }, [url, refetch])

  return (
    <main className={`homeMovieListContainer ${isSuccess ? 'loaded' : ''}`}>
      {isLoading && <strong>Loading data</strong>}
      {isError && <strong>Error fetching data</strong>}
      <div className='homeMovieList'>
        {
          data.results && data.results.length > 0
            ? (
                data.results.slice(0, 5).map((item, index) => {
                  return (
                    <div
                      className='homeMovie'
                      key={item.id}
                    >
                      <Link
                        to={`/search-page/movies-tvshows/${item.id}`}
                        state={{ dataToRender }}

                      >
                        <img
                          src={urlPosterImage + item.poster_path}
                          width={100}
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
  )
}
