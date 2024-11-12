import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type TReactQueryClientProviderProps = {} & TChildrenProps;

const queryClient = new QueryClient();

function ReactQueryClientProvider({
  children,
}: TReactQueryClientProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      {children}
    </QueryClientProvider>
  );
}

export { ReactQueryClientProvider };
