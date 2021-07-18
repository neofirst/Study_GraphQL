//Next Server Side Rendering 위한 내용.
//기본적인 포멧이 정해져있다.
import './index.scss'

const App = ({ Component, pageProps }) => <Component {...pageProps} />

App.getInitialProps = async ({ ctx, Component }) => {
  const pageProps = await Component.getInitialProps?.(ctx)
  return { pageProps }
}

export default App