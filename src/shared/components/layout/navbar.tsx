import { usePageLoadingContext } from '@/shared/lib/contexts'
import React, { ComponentProps, JSX } from 'react'

const navOptions: ComponentProps<typeof NavbarItem>[] = [
  { label: 'Dashboard', icon: <LIconChartPie /> },
  { label: 'Kanban', icon: <LIconKanban /> },
  { label: 'Inbox', icon: <LIconInbox /> },
  { label: 'Users', icon: <LIconUsers /> },
  { label: 'Products', icon: <LIconShoppingBag /> },
  { label: 'Sign In', icon: <LIconLogIn /> },
  { label: 'Sign Up', icon: <LIconUserRoundPen /> },
]

const Navbar = () => {
  return (
    <>
      <OpenSidebarButton />

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {navOptions.map((_opt) => (
              <NavbarItem key={_opt.label} {..._opt} />
            ))}
          </ul>
        </div>
      </aside>
    </>
  )
}

type TNavbarItemProps = {
  label: string
  icon: JSX.Element
}

const NavbarItem = ({ icon, label }: TNavbarItemProps) => {
  const { setIsLoading } = usePageLoadingContext()
  return (
    <li>
      <a
        href="#"
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        onClick={() => setIsLoading((curr) => !curr)}
      >
        {React.cloneElement(icon, {
          className:
            'w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white',
        })}

        <span className="ms-3">{label}</span>
      </a>
    </li>
  )
}

const OpenSidebarButton = () => (
  <button
    data-drawer-target="default-sidebar"
    data-drawer-toggle="default-sidebar"
    aria-controls="default-sidebar"
    type="button"
    className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  >
    <span className="sr-only">Open sidebar</span>
    <LIconGripVertical />
  </button>
)

export default NavbarItem

export { Navbar }
