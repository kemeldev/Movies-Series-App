import './SearchForm.css'

export function SearchForm ({ moviesOrShows, setMoviesOrShows }) {
  const handleClickMovies = (e) => {
    if (moviesOrShows) {
      return
    }
    e.preventDefault()
    setMoviesOrShows(prevState => !prevState)
  }

  const handleClickShows = (e) => {
    if (!moviesOrShows) {
      return
    }
    e.preventDefault()
    setMoviesOrShows(prevState => !prevState)
  }

  return (
    <main className='searchForm'>
      <h3>What do you want to watch?</h3>
      <div className='btnContainer'>
        <button className={moviesOrShows ? 'btnActive' : 'btnInactive'} onClick={handleClickMovies}>Movies</button>
        <button className={moviesOrShows ? 'btnInactive' : 'btnActive'} onClick={handleClickShows}>Tv Shows</button>
      </div>
      <section>
        <form action='/search' method='get' className='form'>
          <h3>Specific Search</h3>
          <label htmlFor='specificSearch'>Type the {moviesOrShows ? 'Movie' : 'Show'} to search</label>
          <input type='text' name='specificSearch' />
        </form>
      </section>

      <section>
        <form action='/search' method='get' className='form'>
          <h3>Quick Search</h3>
          <label htmlFor='trends'>Trends</label>
          <input type='checkbox' name='trends' />
          <label htmlFor='votes'>Votes scored</label>
          <input type='range' name='votes' min='5' max='10' />
        </form>
      </section>
    </main>
  )
}
