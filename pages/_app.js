import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import Layout from '../layouts/default'
import { Provider } from "react-redux";
import store from '@/redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from "@/pages/ProtectedRoute"

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store} >
      <Layout>
        <ProtectedRoute>
          <Component {...pageProps} />
          <ToastContainer />
        </ProtectedRoute>
      </Layout>
    </Provider>
  )
}

export default MyApp
