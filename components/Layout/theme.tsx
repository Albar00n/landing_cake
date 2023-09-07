import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    body: "'Vazirmatn', sans-serif",
    heading: "'Vazirmatn', sans-serif",
  },
  // Vazirmatn
  // Craftwork Grotesk
  colors: {
    black: '#000',
  },
  styles: {
    global: {
      body: {
        bg: '#FFFFFF',
        color: '#000',
      },
    },
  },
  config: {
    initialColorMode: 'light', // 'dark' | 'light'
    useSystemColorMode: true,
  },
})

export default theme
