import './SearchForm.css'

export function SearchForm ({ moviesOrShows, setMoviesOrShows }) {
  return (
    <main className='formContainer'>
      <section className='searchFormContainer'>
        <form action='/search' method='get' className='searchForm'>
          <h3>Search</h3>
          <label htmlFor='specificSearch'>Movie to search</label>
          <input type='text' name='specificSearch' placeholder='Avengers, Matrix etc' />
          <button>Search</button>
        </form>
      </section>

      <section className='sortFormContainer'>
        <form action='/search' method='get' className='sortForm'>
          <h3>Sort by</h3>
          <label htmlFor='sortByName'>Name </label>
          <input type='checkbox' name='sortByName' />
          <label htmlFor='sortByRating'>Rating </label>
          <input type='checkbox' name='sortByRating' />
          <label htmlFor='releasedYear'>Released year </label>
          <input type='checkbox' name='releasedYear' />
          <button>Sort current search</button>
        </form>
      </section>

      <section className='filtersFormContainer'>
        <form action='/search' method='get' className='filtersForm'>
          <label htmlFor='genreFilter'>Choose an option:</label>

          <select name='genreFilter'>
            <option value='action'>Action</option>
            <option value='adventure'>Adventure</option>
            <option value='animation'>Animation</option>
            <option value='comedy'>Comedy</option>
            <option value='crime'>Crime</option>
          </select>
        </form>
      </section>

    </main>
  )
}
