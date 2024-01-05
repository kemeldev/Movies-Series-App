import { fetchFromApi } from '../services/fetchFromApi'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'

export const usedDataFetched = (url, queryKey) => {
  const {
    data: dataMovies = [],
    isError,
    fetchNextPage,
    hasNextPage,
    isLoading,
    refetch,
    isFetchingNextPage
  } = useInfiniteQuery({
    queryKey,
    queryFn: async () =>
      fetchFromApi(url),
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
