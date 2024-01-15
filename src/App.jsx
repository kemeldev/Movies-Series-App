import { Route, Routes } from 'react-router-dom'
import { SearchPage } from './Pages/SearchPage/SearchPage'
import './App.css'
import { PageNotFound } from './Pages/PageNotFound/PageNotFound'
import { Home } from './Pages/Home/Home'
import { MovieOrShowDetails } from './Pages/Details/MovieOrShowDetails'

function App () {
  // TODO: MovieOrShowDetails has no styles of format, but data works fine, create the page
  // TODO: Create a page to render the Popular people, it should be similar to MovieOrShowDetails
  return (
    <>
      <div className='app'>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search-page' element={<SearchPage />} />
          <Route path='/search-page/movies-tvshows/:id' element={<MovieOrShowDetails />} />
          <Route path='*' element={<PageNotFound />} />

        </Routes>
      </div>
    </>
  )
}

export default App
