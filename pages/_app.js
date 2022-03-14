import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import { RtlProvider } from '../components/rtlProvider'

import theme from '../public/theme'
import Fonts from '../public/fonts'

function MyApp({ Component, pageProps }) {
  // IF COLOR MODE NOT WORKING
  const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }

  const themeConfig = extendTheme({
    config,
  })

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={themeConfig.config.initialColorMode} />
      <Fonts />
      <RtlProvider>
        <Component {...pageProps} />
      </RtlProvider>
    </ChakraProvider>
  )
}

export default MyApp
