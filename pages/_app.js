import MenuBar from "../components/menuBar"
import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { React, useState, useEffect } from 'react'
import Themes from "../lib/themes"

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

  return(
    <ThemeProvider theme={mode ? Themes.DarkTheme : Themes.LightTheme}>
    <CssBaseline enableColorScheme />
    <MenuBar  mode={mode} func={changeMode} />
      <Component {...pageProps} />
    </ThemeProvider>
    )
    
}

export default MyApp
