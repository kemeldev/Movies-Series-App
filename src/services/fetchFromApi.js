const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTE2YTI4NGQzMTk0MzcyYTg3OTM1ZDk4ZjcxOGZjMiIsInN1YiI6IjY1NDdlZDc5NDFhNTYxMzM2YzVkMzg5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fK_ywKO7h7UwP38WLlLyscKWl5b-D80JynV4JIyp-54'
  }
}

// const URL_ROOT = 'https://api.themoviedb.org/3'

export const fetchFromApi = async (url, pageParam = 1) => {
  try {
    const response = await fetch(`${url}&page=${pageParam}`, OPTIONS)
    if (!response.ok) {
      throw new Error(`Failed to fetch data from API. Status: ${response.status}`)
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

// trending movies
// https://api.themoviedb.org/3/trending/movie/week?language=en-US

// top rated movies
// https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1

// movies videos
// https://api.themoviedb.org/3/movie/1029575/videos?language=en-US

// recommended movies
// https://api.themoviedb.org/3/movie/848326/recommendations?language=en-US&page=1

// similar movies
// https://api.themoviedb.org/3/movie/848326/similar?language=en-US&page=1

// trending people
// https://api.themoviedb.org/3/trending/person/week?language=en-US

// popular people
// https://api.themoviedb.org/3/person/popular?language=en-US&page=1

// peoble details
// https://api.themoviedb.org/3/person/1290466?language=en-US

// trending tv shows
// https://api.themoviedb.org/3/trending/tv/day?language=en-US

// search multi (shows, movies)
// https://api.themoviedb.org/3/search/multi?query=avengers&include_adult=false&language=en-US&page=1

// seach movies
// https://api.themoviedb.org/3/search/movie?query=matrix&include_adult=false&language=en-US&page=1

// search tv
// https://api.themoviedb.org/3/search/tv?query=office&include_adult=false&language=en-US&page=1

// popular tv shows
// https://api.themoviedb.org/3/tv/popular?language=en-US&page=1

// top rated shows
// https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1

// similar tv shows
// https://api.themoviedb.org/3/tv/2319/similar?language=en-US&page=1

// tv shows has not recommended

// export const fetchFromApi = async (url) => {
//   try {
//     const response = await fetch(URL_ROOT + url, OPTIONS)
//     if (!response.ok) {
//       throw new Error(`Failed to fetch data from API. Status: ${response.status}`)
//     }
//     const { results, page } = await response.json()
//     const nextCursor = Number(page + 1)
//     return {
//       results, nextCursor
//     }
//   } catch (error) {
//     console.error('Error fetching movies:', error)
//   }
// }
