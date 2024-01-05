import { Route, Routes } from 'react-router-dom'
import { SearchPage } from './components/SearchPage'
import './App.css'
import { MovieOrShowDetails } from './components/MovieOrShowDetails'
import { TestReactQuery } from './components/TestReactQuery'
import { PageNotFound } from './Pages/PageNotFound/PageNotFound'
import { Home } from './Pages/Home/Home'

function App () {
  return (
    <>
      <div className='app'>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/test' element={<TestReactQuery />} />
          <Route path='/search-page' element={<SearchPage />} />
          <Route path='/search-page/movies-tvshows/:id' element={<MovieOrShowDetails />} />
          <Route path='*' element={<PageNotFound />} />

        </Routes>
      </div>
    </>
  )
}

export default App
