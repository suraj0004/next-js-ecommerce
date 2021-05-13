import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import Layout from '../layouts/default'
import { Provider } from "react-redux";
import store from '@/redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store = {store} >
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
