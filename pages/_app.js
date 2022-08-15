import MenuBar from "../components/menuBar"
import { ThemeProvider } from "@mui/material/styles"
import { CssBaseline, Container } from "@mui/material"
import { React, useState, useEffect } from 'react'
import Themes from "../lib/themes"
import useWindowSize from "../lib/windowSize"
import Head from "next/head"

function MyApp({ Component, pageProps }) {

  const [mode, setMode] = useState(false);

  useEffect(() => {
    themeCheck();
  }, [mode]);

  useEffect(() => {
    themeCheck();
  }, []);

  const themeCheck = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setMode(false);
    }
  }

  const toggleTheme = () => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
    } else {
      localStorage.setItem("theme", "dark");
    }
    setMode(!mode);
  };

  const size = useWindowSize();

  return (
    <ThemeProvider theme={mode ? Themes.DarkTheme : Themes.LightTheme}>
      <Head>
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      </Head>
      <CssBaseline enableColorScheme />
      <Container maxWidth='md'>
        <MenuBar mode={mode} func={toggleTheme} width={size.width} />
        <Container maxWidth='sm' sx={{ mt: '120px' }}>
          <Component {...pageProps} />
        </Container>
      </Container>
    </ThemeProvider>
  )
}

export default MyApp
