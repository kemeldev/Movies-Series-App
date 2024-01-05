import './Home.css'
import { Navbar } from '../../components/Navbar'
import { TrendingMovies } from '../../components/trendingMovies'
import { TrendingTV } from '../../components/trendingTv'
import { TopRatedMovies } from '../../components/topRatedMovies'
import { TopRatedTv } from '../../components/topRatedTv'
import { useState } from 'react'
import { PopularPeople } from '../../components/popularPeople'

export function Home () {
  const [movies, setMovies] = useState(false)
  const [tv, setTv] = useState(false)

  const handleMovies = (e) => {
    e.preventDefault()
    setMovies(prevState => !prevState)
  }

  const handleTv = (e) => {
    e.preventDefault()
    setTv(prevState => !prevState)
  }
  return (
    <>
      <header className='homeContainer'>
        <Navbar />
        <h2>Welcome to the movies App</h2>
        <h2>Discover your favourite movies and shows to watch</h2>

      </header>
      <main>
        <button onClick={handleMovies}>TopRated Movies</button>
        <button onClick={handleMovies}>Trending Movies</button>
        {
          movies ? <TrendingMovies /> : <TopRatedMovies />
        }
        <button onClick={handleTv}>TopRated Tv Shows</button>
        <button onClick={handleTv}>Trending Tv Shows</button>

        {
          tv ? <TrendingTV /> : <TopRatedTv />
        }
        <h3>Popular people</h3>
        <PopularPeople />

      </main>

    </>
  )
}
