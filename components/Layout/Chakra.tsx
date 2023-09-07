import { ChakraProvider } from '@chakra-ui/provider'
import { ReactNode, Suspense } from 'react'
import theme from './theme'
import dynamic from 'next/dynamic'
import { Box } from '@chakra-ui/react'
const ScrollToTop = dynamic(() => import('./ScrollToTop'), {
  ssr: false,
})

const Chakra = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Box maxW="100%">
        <ChakraProvider theme={theme}>
          {children}
          <ScrollToTop />
        </ChakraProvider>
      </Box>
    </>
  )
}

export default Chakra
