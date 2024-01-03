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
    <>
      <main className='navbar'>
        <nav className='navbarContainer'>
          <div className='navbarLeft'>
            <h4>Watch List App</h4>
          </div>

          <div className='navbarRight'>
            <h4>Search: </h4>
            <Link to='/search-page' state={{ popularTvShows, popularMovies }}>
              <button onClick={handleMoviesClick}>Movies</button>
              <button onClick={handleTvShowsClick}>Tv-Shows</button>
            </Link>

          </div>

        </nav>

      </main>
    </>
  )
}
