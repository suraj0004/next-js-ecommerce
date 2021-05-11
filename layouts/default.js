import Head from 'next/head'
import Header from '../components/header';
import Footer from '../components/footer';

export default function Layout({ children }) {
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