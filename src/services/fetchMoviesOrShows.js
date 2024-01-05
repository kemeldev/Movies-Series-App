const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTE2YTI4NGQzMTk0MzcyYTg3OTM1ZDk4ZjcxOGZjMiIsInN1YiI6IjY1NDdlZDc5NDFhNTYxMzM2YzVkMzg5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fK_ywKO7h7UwP38WLlLyscKWl5b-D80JynV4JIyp-54'
  }
}
// this works fine for infinity query
export const fetchMoviesOrShows = async ({ pageParam = 1 }) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageParam}&sort_by=popularity.desc`, options)
    if (!response.ok) {
      throw new Error(`Failed to fetch movies. Status: ${response.status}`)
    }
    const { results, page } = await response.json()
    const nextCursor = Number(page + 1)
    return {
      results, nextCursor
    }
  } catch (error) {
    console.error('Error fetching movies:', error)
  }
}
