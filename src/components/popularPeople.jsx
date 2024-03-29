import { Link } from 'react-router-dom'
import { useFetch } from '../Hooks/useDataFetched'
import { useApi } from '../context/apiContext'
import { useEffect } from 'react'

// TODO: style the element,

export function PopularPeople () {
  const queryKey = ['popularPeople']
  const url = 'https://api.themoviedb.org/3/person/popular?language=en-US&page=1'
  const { isError, isLoading, isSuccess, data, refetch } = useFetch(url, queryKey)
  const { urlPosterImage } = useApi()

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
                        to={{
                          pathname: `/search-page/movies-tvshows/${item.id}`
                        }}
                      >
                        <img
                          src={urlPosterImage + item.profile_path}
                          width={100}
                          alt={item.title}
                        />
                      </Link>
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
