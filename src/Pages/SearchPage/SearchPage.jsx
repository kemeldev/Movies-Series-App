import { SearchForm } from '../../components/SearchForm'
import { MoviesOrShows } from '../../components/MoviesOrShows'
import './SearchPage.css'
import { Navbar } from '../../components/Navbar'
import { usedDataFetched } from '../../Hooks/useDataFetched'
import { useEffect, useState } from 'react'
import { useSearchContext } from '../../context/searchContext'

export function SearchPage () {
  const [sortByName, setSortByName] = useState(false)

  const queryKey = ['search']
  const { whatToSearch } = useSearchContext()
  const movieOrtv = whatToSearch
  const quickSearchParameters = {
    trending: 'trending',
    topRated: 'topRated'
  }
  const [quickSearch, setQuickSearch] = useState(quickSearchParameters.trending)
  const [search, setSearch] = useState(null)

  const url = () => {
    if (search) {
      return `https://api.themoviedb.org/3/search/${movieOrtv}?query=${search}&include_adult=false&language=en-US&page=1`
    }
    if (quickSearch === quickSearchParameters.trending) {
      return `https://api.themoviedb.org/3/${movieOrtv}/popular?language=en-US`
    }
    if (quickSearch === quickSearchParameters.topRated) {
      return `https://api.themoviedb.org/3/${movieOrtv}/top_rated?language=en-US`
    }
  }

  const { fetchNextPage, isError, isLoading, data, hasNextPage, isFetchingNextPage, refetch } = usedDataFetched(url(), queryKey)

  const toggleQuickSearch = (e) => {
    e.preventDefault()
    setSearch(null)
    setQuickSearch((prevState) =>
      prevState === quickSearchParameters.trending ? quickSearchParameters.topRated : quickSearchParameters.trending
    )
  }

  useEffect(() => {
    refetch()
  }, [url(), refetch])

  return (
    <>
      <Navbar />

      <main className='searchPage'>
        <SearchForm
          toggleQuickSearch={toggleQuickSearch}
          setSearch={setSearch}
          setSortByName={setSortByName}

        />

        <MoviesOrShows
          isLoading={isLoading}
          isError={isError}
          dataToRender={data}
          sortByName={sortByName}
        />
      </main>

      <button
        className='loadMoreBtn'
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? 'Loading more...'
          : hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
      </button>

      <div className='test'>
        <h2>Testing this space</h2>
      </div>

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
