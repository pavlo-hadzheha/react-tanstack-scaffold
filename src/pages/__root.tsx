import { createRootRoute, Outlet } from '@tanstack/react-router'
import { RootLayout } from '../app/layouts'
import { GlobalProviders } from '@/app/providers'

export const Route = createRootRoute({
  component: RootRouteContent,
})

function RootRouteContent() {
  return (
    <>
      <GlobalProviders>
        <RootLayout>
          <Outlet />
        </RootLayout>
      </GlobalProviders>
    </>
  )
}
