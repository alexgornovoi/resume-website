import MenuBar from "../components/menuBar"

function MyApp({ Component, pageProps }) {
  return(
    <MenuBar>
      <Component {...pageProps} />)
    </MenuBar>
    )
}

export default MyApp
