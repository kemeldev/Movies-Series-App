import { SearchForm } from '../../components/SearchForm'
import { MoviesOrShows } from '../../components/MoviesOrShows'
import './SearchPage.css'
import { Navbar } from '../../components/Navbar'
import { usedDataFetched } from '../../Hooks/useDataFetched'
import { useEffect } from 'react'
import { useSearchContext } from '../../context/searchContext'
// import { useSearchContext } from '../context/searchContext'
// import { useLocation } from 'react-router-dom'

export function SearchPage () {
  const { whatToSearch } = useSearchContext()
  const queryKey = ['search']

  const movieOrtv = whatToSearch
  const query = 'avengers'
  const url = `https://api.themoviedb.org/3/search/${movieOrtv}?query=${query}&include_adult=false&language=en-US&page=1`

  const { fetchNextPage, isError, isLoading, data, hasNextPage, isFetchingNextPage, refetch } = usedDataFetched(url, queryKey)

  useEffect(() => {
    refetch()
  }, [url, refetch])

  return (
    <>
      <Navbar />

      <main className='searchPage'>
        <SearchForm />

        <MoviesOrShows
          isLoading={isLoading}
          isError={isError}
          dataToRender={data}
        />
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
              ? 'Load More'
              : 'Nothing more to load'}
        </button>

      </main>
    </>

  // Retrieve the data from the queryClient, in this case the data comes from react Test
  // import { useQueryClient } from '@tanstack/react-query'
  // const queryClient = useQueryClient()
  // const dataMovies = queryClient.getQueryData('moviesFetched')
  // console.log(dataMovies)

  // This is the global state that indicates if we are searching for movies or shows
  // const { whatToSearch, searchState } = useSearchContext()

  // Access the state passed from the Navbar component
  // const location = useLocation()
  // const { popularMovies, popularTvShows } = location.state || {}
  )
}
