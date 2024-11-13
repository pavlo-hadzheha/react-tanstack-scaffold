import { PageLoadingProvider } from '@/shared/lib/providers'
import { GlobalAntConfigProvider } from './global-ant-config-provider'
import { ReactQueryClientProvider } from './query-client-provider'

export const GlobalProviders = ({ children }: TChildrenProps) => {
  return (
    <ReactQueryClientProvider>
      <GlobalAntConfigProvider>
        <PageLoadingProvider>{children}</PageLoadingProvider>
      </GlobalAntConfigProvider>
    </ReactQueryClientProvider>
  )
}
