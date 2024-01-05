// import { SearchForm } from './SearchForm'
import { MoviesOrShows } from './MoviesOrShows'
import movieplus from '../assets/movieplus.svg'
import './SearchPage.css'
import { Navbar } from './Navbar'
import { usedDataFetched } from '../Hooks/useDataFetched'
// import { useSearchContext } from '../context/searchContext'
// import { useLocation } from 'react-router-dom'

export function SearchPage () {
  const { fetchNextPage, isError, isLoading, data, hasNextPage, isFetchingNextPage } = usedDataFetched()

  console.log(data)

  return (
    <>
      <Navbar />
      <img
        className='playlist_logo'
        src={movieplus}
        alt='Play-list logo'
        height={35}
      />
      <main className='searchPage'>
        {/* <SearchForm
          moviesOrShows={moviesOrShows}
        /> */}

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
