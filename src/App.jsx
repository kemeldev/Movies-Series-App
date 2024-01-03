import { Route, Routes } from 'react-router-dom'
import { SearchPage } from './components/SearchPage'
import './App.css'
import { MovieOrShowDetails } from './components/MovieOrShowDetails'
import { Home } from './components/Home'
import { TestReactQuery } from './components/TestReactQuery'

function App () {
  return (
    <>
      <div className='app'>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/test' element={<TestReactQuery />} />
          <Route path='/search-page' element={<SearchPage />} />
          <Route path='/search-page/movies-tvshows/:id' element={<MovieOrShowDetails />} />

        </Routes>
      </div>
    </>
  )
}

export default App
