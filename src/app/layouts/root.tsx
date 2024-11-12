import { Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { GlobalAntConfigProvider, ReactQueryClientProvider } from '../providers'

const RootLayout = ({ children }: TChildrenProps) => {
  return (
    <>
      <div className="p-2 flex gap-2 text-lg">
        <Link
          to="/"
          activeProps={{
            className: 'font-bold',
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>{' '}
        <Link
          to="/about"
          activeProps={{
            className: 'font-bold',
          }}
        >
          About
        </Link>
      </div>

      <hr />

      <ReactQueryClientProvider>
        <GlobalAntConfigProvider>
          <Outlet />
        </GlobalAntConfigProvider>
      </ReactQueryClientProvider>

      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
}

export { RootLayout }
