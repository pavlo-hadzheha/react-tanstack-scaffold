import { appColors } from '../styles/tailwind/app.colors'
import { ConfigProvider } from 'antd'

export const GlobalAntConfigProvider = ({ children }: TChildrenProps) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: '',
          colorPrimary: appColors.primary,
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}
