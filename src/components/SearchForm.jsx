import { useState } from 'react'
import './SearchForm.css'

export function SearchForm ({ toggleQuickSearch, setSearch, setSortByName }) {
  const [searchFormError, setSearchFormError] = useState('')

  const handleSearchSubmit = async (e) => {
    e.preventDefault()

    // const dataUsingRef = textInputRef.current.value

    const SearchWord = new FormData(e.target)
    const dataToSearch = SearchWord.get('specificSearch')
    setSearch(dataToSearch)

    if (dataToSearch === '') {
      const newError = 'No se puede buscar una pelicula vacia'
      setSearchFormError(newError)
      console.log(newError)
      return
    }
    if (dataToSearch.match(/\d+/)) {
      const newError = 'No pueden ser solo numeros'
      setSearchFormError(newError)
      console.log(newError)

      return
    }
    if (dataToSearch.length < 3) {
      const newError = 'Al menos 3 letras para buscar la pelicula'
      setSearchFormError(newError)
      console.log(newError)
    }
  }

  const handleSortByName = () => {
    setSortByName((prevSortByName) => !prevSortByName)
  }

  return (
    <main className='formContainer'>

      <section className='quickSearchFormContainer'>
        <form method='get' className='quickSearchForm'>
          <h3>Quick Search</h3>
          <button onClick={toggleQuickSearch}>Top Rated</button>
          <button onClick={toggleQuickSearch}>Trending / Popular</button>
        </form>
      </section>

      <section className='searchFormContainer'>
        <form onSubmit={handleSearchSubmit} action='/search' method='get' className='searchForm'>
          <h3>Search</h3>
          <label htmlFor='specificSearch'>Type to search by name</label>
          {
          searchFormError === '' ? null : <h2>{searchFormError}</h2>
          }
          <input type='text' name='specificSearch' placeholder='Avengers, Matrix etc' />
          <button>Search</button>
        </form>
      </section>

      <section className='sortFormContainer'>
        <form method='get' className='sortForm'>
          <h3>Sort by</h3>
          <label htmlFor='sortByName'>Name </label>
          <input type='checkbox' name='sortByName' onChange={handleSortByName} />
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
