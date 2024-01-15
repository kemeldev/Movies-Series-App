import './Home.css'
import { Navbar } from '../../components/Navbar'
import { TrendingMovies } from '../../components/trendingMovies'
import { TrendingTV } from '../../components/trendingTv'
import { TopRatedMovies } from '../../components/topRatedMovies'
import { TopRatedTv } from '../../components/topRatedTv'
import { useState } from 'react'
import { PopularPeople } from '../../components/popularPeople'
import { useApi } from '../../context/apiContext'

export function Home () {
  const [movies, setMovies] = useState(true)
  const [tv, setTv] = useState(false)
  const [backgroundImg, setBackgroundImg] = useState('/md848EEPm3dHZOqwGxxTVwH2vu5.jpg')
  const { urlaBackgroundImage } = useApi()

  // TODO: this toggles state from true to false, can be enhanced
  const handleMovies = (e) => {
    e.preventDefault()
    setMovies(prevState => !prevState)
  }
  // TODO: this toggles state from true to false, can be enhanced
  const handleTv = (e) => {
    e.preventDefault()
    setTv(prevState => !prevState)
  }

  const headerStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)),url(${urlaBackgroundImage + backgroundImg})`
  }

  return (
    <>
      <header className='homeContainer' style={headerStyle}>
        <Navbar />

        <h2>Welcome to the movies App</h2>
        <h2>Discover your favourite movies and shows to watch</h2>

      </header>
      <main>
        <button onClick={handleMovies}>TopRated Movies</button>
        <button onClick={handleMovies}>Trending Movies</button>
        {
          // TODO trending movies and top rated movies are basically the same, i can keep just one and pass it a state, so the url to fetch changes when the state does,do the same with TrendingTV and TopRatedTv
          movies ? <TrendingMovies setBackgroundImg={setBackgroundImg} /> : <TopRatedMovies />
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
