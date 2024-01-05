// const handleClick = () => {
//   setWhatToSearch(prevState =>
//     prevState === searchState.movies ? searchState.tvshows : searchState.movies
//   );
// }

import { createContext, useContext, useState } from 'react'

const SearchContext = createContext()

const searchState = {
  movies: 'movie',
  tvshows: 'tv'
}

const SearchProvider = ({ children }) => {
  const [whatToSearch, setWhatToSearch] = useState(searchState.movies)

  const toggleSearch = () => {
    setWhatToSearch((prevState) =>
      prevState === searchState.movies ? searchState.tvshows : searchState.movies
    )
  }

  const contextValue = {
    whatToSearch,
    toggleSearch,
    searchState
  }

  return (
    <SearchContext.Provider
      value={contextValue}
    >
      {children}
    </SearchContext.Provider>
  )
}

const useSearchContext = () => {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error('useSearchContext must be used within a SearchProvider')
  }
  return context
}

export { SearchProvider, useSearchContext }
