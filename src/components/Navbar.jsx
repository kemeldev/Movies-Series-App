import { useSearchContext } from '../context/searchContext'
import { Link } from 'react-router-dom'
import './Navbar.css'

export function Navbar ({ popularMovies, popularTvShows }) {
  const { whatToSearch, toggleSearch, searchState } = useSearchContext()

  const handleMoviesClick = () => {
    if (whatToSearch !== searchState.movies) {
      toggleSearch()
    }
  }

  const handleTvShowsClick = () => {
    if (whatToSearch !== searchState.tvshows) {
      toggleSearch()
    }
  }

  return (
    <header>
      <main className='navbar'>
        <nav className='navbarContainer'>
          <div className='navbarLeft'>
            <h4>Watch List App</h4>
            <Link to='/'>
              <button>Home</button>
            </Link>
          </div>

          <div className='navbarRight'>
            <h4>Search: </h4>
            {/* // Here is how we pass a state to a route, see the seach page component */}
            <Link to='/search-page' state={{ popularTvShows, popularMovies }}>
              <button onClick={handleMoviesClick}>Movies</button>
              <button onClick={handleTvShowsClick}>Tv-Shows</button>
              <button>People</button>
            </Link>
            {/* <Link to='/test'>
              <button>Test React Query</button>
            </Link> */}

          </div>

        </nav>

      </main>
    </header>
  )
}
