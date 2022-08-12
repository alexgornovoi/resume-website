import MenuBar from "../components/menuBar"
import { ThemeProvider } from "@emotion/react"
import { CssBaseline, Box, Container } from "@mui/material"
import { React, useState, useEffect } from 'react'
import Themes from "../lib/themes"
import useWindowSize from "../lib/windowSize"

function MyApp({ Component, pageProps }) {
  const item = {}

  useEffect(() => {
    const item = localStorage.getItem('key')
  }, [])

  const [mode, setMode] = useState(item === 'true');

  useEffect(() => {
    localStorage.setItem('theme-mode', mode);
  }, [mode]);

  const changeMode = () => {
    setMode(!mode)
  }

  const size = useWindowSize();
  
  return (
    <ThemeProvider theme={mode ? Themes.DarkTheme : Themes.LightTheme}>
      <CssBaseline enableColorScheme />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        minWidth="30vh"
      >
        <Container maxWidth='md'>
        <Box 
          minHeight="85vh"
        >
          <MenuBar mode={mode} func={changeMode} width={size.width}/>
          <Component {...pageProps} />
        </Box>
        </Container>
      </Box>
    </ThemeProvider>
  )

}

export default MyApp
