import { createContext, useContext } from 'react'

const ApiContext = createContext()

export const ApiProvider = ({ children }) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTE2YTI4NGQzMTk0MzcyYTg3OTM1ZDk4ZjcxOGZjMiIsInN1YiI6IjY1NDdlZDc5NDFhNTYxMzM2YzVkMzg5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fK_ywKO7h7UwP38WLlLyscKWl5b-D80JynV4JIyp-54'
    }
  }

  // TODO: just keep the urlaBackgroundImage and the urlPosterImage if needed, of create a store if it is easier

  const movieApiUrl = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc'

  const tvApiUrl = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc'

  const urlaBackgroundImage = 'https://image.tmdb.org/t/p/w1280'

  const urlPosterImage = 'https://image.tmdb.org/t/p/w500'

  return (
    <ApiContext.Provider value={{ options, movieApiUrl, tvApiUrl, urlaBackgroundImage, urlPosterImage }}>
      {children}
    </ApiContext.Provider>
  )
}

export const useApi = () => {
  const context = useContext(ApiContext)
  if (!context) {
    throw new Error('useApi must be used within an ApiProvider')
  }
  return context
}
