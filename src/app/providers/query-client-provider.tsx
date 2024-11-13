import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

type TReactQueryClientProviderProps = {} & TChildrenProps

const queryClient = new QueryClient()

function ReactQueryClientProvider({ children }: TReactQueryClientProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools buttonPosition="bottom-left" />
      {children}
    </QueryClientProvider>
  )
}

export { ReactQueryClientProvider }
