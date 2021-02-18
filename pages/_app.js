import '../styles/globals.css'

import NavLayout from '../components/Nav';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavLayout />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
