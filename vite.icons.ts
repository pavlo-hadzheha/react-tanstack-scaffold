import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import { ResolverFunction } from 'unplugin-auto-import/types'

export const AppIconsPlugin = ({ dir }: { dir: string }) => {
  return Icons({
    compiler: 'jsx',
    jsx: 'react',
    customCollections: {
      icon: FileSystemIconLoader(dir),
    },
  })
}

export const AppIconsResolver = () =>
  IconsResolver({
    prefix: 'app',
    extension: 'jsx',
    customCollections: ['icon'],
  })

export const LucideIconsResolver: ResolverFunction = (name) => {
  if (name.startsWith('LIcon')) return { name: name.slice(5), from: 'lucide-react' }
}
