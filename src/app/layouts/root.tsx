import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { LoadingSteps, Navbar } from '@/shared/components'
import { usePageLoadingContext } from '@/shared/lib/contexts'

const RootLayout = ({ children }: TChildrenProps) => {
  const { isLoading } = usePageLoadingContext()
  return (
    <>
      <Navbar />

      <main className="relative p-4 sm:ml-64 h-screen sm:w-[calc(100%-256px)] w-full">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm">
            <LoadingSteps />
          </div>
        )}

        {children}
      </main>

      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
}

export { RootLayout }
