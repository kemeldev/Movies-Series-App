import { fetchFromApi } from '../services/fetchFromApi'
import { fetchMoviesOrShows } from '../services/fetchMoviesOrShows'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'

export const usedDataFetched = () => {
  const {
    data: dataMovies = [],
    isError,
    fetchNextPage,
    hasNextPage,
    isLoading,
    refetch,
    isFetchingNextPage
  } = useInfiniteQuery({
    queryKey: ['moviesFetched'],
    queryFn: (params) => fetchMoviesOrShows({ ...params }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => lastPage?.nextCursor

  })

  return {
    refetch,
    fetchNextPage,
    isLoading,
    isError,
    data: dataMovies.pages?.flatMap(page => page.results) ?? [],
    hasNextPage,
    isFetchingNextPage
  }
}

export const useFetch = (url, queryKey) => {
  const { isLoading, isError, isSuccess, data = [], refetch } = useQuery({
    queryKey,
    queryFn: async () =>
      fetchFromApi(url)
  })
  return {
    isError,
    isLoading,
    isSuccess,
    data: data ?? [],
    refetch
  }
}
