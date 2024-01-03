const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTE2YTI4NGQzMTk0MzcyYTg3OTM1ZDk4ZjcxOGZjMiIsInN1YiI6IjY1NDdlZDc5NDFhNTYxMzM2YzVkMzg5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fK_ywKO7h7UwP38WLlLyscKWl5b-D80JynV4JIyp-54'
  }
}

export const fetchDataMovies = async ({ pageParam = 1 }) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&${pageParam}&sort_by=popularity.desc`, options)
    if (!response.ok) {
      throw new Error(`Failed to fetch movies. Status: ${response.status}`)
    }
    const { results } = await response.json()
  } catch (error) {
    console.error('Error fetching movies:', error)
  }
}
export const fetchDataTvShows = async ({ pageParam = 1 }) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&${pageParam}&sort_by=popularity.desc`, options)
    if (!response.ok) {
      throw new Error(`Failed to fetch TV shows. Status: ${response.status}`)
    }
    const { results } = await response.json()
  } catch (error) {
    console.error('Error fetching TV shows:', error)
  }
}
