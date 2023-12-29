import { Route, Routes, Link } from 'react-router-dom'
import { SearchPage } from './components/SeachPage'
import { MovieDetails } from './components/MoviesDetails'
import './App.css'

const Home = () => {
  return (
    <>
      <h1>Welcome to Movies-Series App</h1>
      <h3>Where you can search for your favourite movies and series and create your own watchlist</h3>
      <Link to="/search-page">
        <button>Go to the app</button>
      </Link>
    </>
  )
}



function App() {

  return (
    <>      
      <div className='App'>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/search-page' element={<SearchPage/>}/>
          <Route path="search-page/movies/:id" element={<MovieDetails/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
