'use client'

import { Dispatch, SetStateAction } from 'react'

type TPageLoadingProviderProps = TChildrenProps
type TPageLoadingContextValue = {
  isLoading: boolean
  setIsLoading: Dispatch<SetStateAction<boolean>>
}

const PageLoadingContext = createContext<TPageLoadingContextValue | null>(null)

const PageLoadingProvider = ({ children }: TPageLoadingProviderProps) => {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <PageLoadingContext.Provider
      value={{
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </PageLoadingContext.Provider>
  )
}

export { PageLoadingProvider, PageLoadingContext }
