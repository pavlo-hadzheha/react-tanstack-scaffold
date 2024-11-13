import { useContextValue } from './utils'
import { PageLoadingContext } from './providers'

export const usePageLoadingContext = () => useContextValue({ PageLoadingContext })
