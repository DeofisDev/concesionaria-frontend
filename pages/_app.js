import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: 'Montserrat, sans-serif',
    body: 'Montserrat, sans-serif',
  }
})


function MyApp({ Component, pageProps }) {


  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp 