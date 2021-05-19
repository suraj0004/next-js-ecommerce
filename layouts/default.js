import Head from 'next/head'
import Header from '../components/header';
import Footer from '../components/footer';
import { fetchcart } from '@/redux/index';
import { useEffect } from 'react';
import { connect } from 'react-redux';

function Layout({ children, fetchcart }) {

    
  useEffect(() => {
    fetchcart();
  }, []);
  
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="container">
                <Header />

                <main className="content_section" >
                    {children}
                </main>

                <Footer />
            </div>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      fetchcart: () => dispatch(fetchcart())
    }
  }
  
  export default connect(null, mapDispatchToProps)(Layout);