import AutoImport from 'unplugin-auto-import/vite'
import { AppIconsResolver, LucideIconsResolver } from './vite.icons'

/* CONFIGURATION FOR SCRIPTS AUTO-IMPORT */
export const ImportsBuilder = () =>
  AutoImport({
    dts: './dts/auto-imports.d.ts',

    dirs: [],

    eslintrc: {
      enabled: true,
    },

    imports: [
      'react',
      {
        'react-dom': ['createPortal'],
        react: ['createContext', 'Fragment'],
      },
    ],
    resolvers: [AppIconsResolver(), LucideIconsResolver],
  })
