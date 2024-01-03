import { SearchForm } from './SearchForm'
import { MoviesOrShows } from './MoviesOrShows'
import movieplus from '../assets/movieplus.svg'
import './SearchPage.css'
import { Navbar } from './Navbar'
import { useSearchContext } from '../context/searchContext'
import { useLocation } from 'react-router-dom'

export function SearchPage () {
  const { whatToSearch, searchState } = useSearchContext()

  const location = useLocation()

  // Access the state passed from the Navbar component
  const { popularMovies, popularTvShows } = location.state || {}
  console.log(location.state)

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
          setMoviesOrShows={setMoviesOrShows}
        /> */}

        <MoviesOrShows
          dataToRender={whatToSearch === searchState.movies ? popularMovies : popularTvShows}
        />

      </main>
    </>
  )
}
