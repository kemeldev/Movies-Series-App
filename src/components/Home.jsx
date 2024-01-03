import { Link } from 'react-router-dom'
import './Home.css'
import { Navbar } from './Navbar'
import { useEffect, useState, useRef } from 'react'
import { useApi } from '../context/apiContext'

export function Home () {
  const [moviesData, setMoviesData] = useState([])
  const [tvShowsData, setTvShowsData] = useState([])
  const [concatenatedData, setConcatenatedData] = useState()
  const originalFetch = useRef()
  const { options, movieApiUrl, tvApiUrl, urlPosterImage } = useApi()

  const fetchDataMovies = async () => {
    try {
      const response = await fetch(movieApiUrl, options)
      if (!response.ok) {
        throw new Error(`Failed to fetch movies. Status: ${response.status}`)
      }
      const { results } = await response.json()
      setMoviesData(results)
    } catch (error) {
      console.error('Error fetching movies:', error)
    }
  }
  const fetchDataTvShows = async () => {
    try {
      const response = await fetch(tvApiUrl, options)
      if (!response.ok) {
        throw new Error(`Failed to fetch TV shows. Status: ${response.status}`)
      }
      const { results } = await response.json()
      setTvShowsData(results)
    } catch (error) {
      console.error('Error fetching TV shows:', error)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use Promise.all to wait for both API calls to complete
        await Promise.all([fetchDataMovies(), fetchDataTvShows()])

        // Concatenate the arrays and shuffle them randomly
        const mergedData = [...moviesData, ...tvShowsData]
        const shuffledData = [...mergedData].sort(() => Math.random() - 0.5)

        // Update state with the shuffled data
        setConcatenatedData(shuffledData)
        originalFetch.current = shuffledData
      } catch (error) {
        console.error('Error in fetchData:', error)
      }
    }

    fetchData()
  }, [])

  const dataRender = concatenatedData !== undefined ? concatenatedData : originalFetch.current
  console.log('useRef', originalFetch.current, 'regularFetchin', concatenatedData)

  return (
    <>
      <header className='homeContainer'>
        <Navbar
          popularMovies={moviesData}
          popularTvShows={tvShowsData}
        />
        <h1>Welcome to Movies-Series App</h1>
        <h3>Discover and search for your favorite movies and series, and effortlessly create your own personalized watch-list</h3>
        <h2>Showing Popular</h2>

      </header>
      <main className='homeMovieListContainer'>
        <div className='homeMovieList'>
          {
          dataRender && dataRender.length > 0
            ? (
                dataRender.slice(0, 5).map((item, index) => {
                  return (
                    <div
                      className='homeMovie'
                      key={item.id}
                    >
                      <Link
                        to={{
                          pathname: `/search-page/movies-tvshows/${item.id}`
                        }}
                      >
                        <img
                          src={urlPosterImage + item.poster_path}
                          width={200}
                          alt={item.title}
                        />
                      </Link>
                      <h3>{item.title}</h3>
                      <h3>{item.name}</h3>
                    </div>
                  )
                })
              )
            : null
    }
        </div>
      </main>

    </>
  )
}
