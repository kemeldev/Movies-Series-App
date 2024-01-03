import { fetchData } from '../services/fetchMoviesOrShows'
import { useInfiniteQuery } from '@tanstack/react-query'

export const useDataFetched = () => {
  const {
    isLoading,
    isError,
    data,
    refetch,
    fetchNextPage,
    hasNextPage
  } = useInfiniteQuery(
    ['moviesFetched'],
    fetchData,
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 3
    }
  )

  return {
    refetch,
    fetchNextPage,
    isLoading,
    isError,
    movies: data?.pages.flatMap((page) => page.users) ?? [],
    hasNextPage
  }
}
