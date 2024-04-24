import Head from 'next/head'
// import Header from '@/components/header'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

export const Layout = ({title, description, children}) => {
    return (
        <>
            <Head>
                <title> {title} </title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <Header /> */}
            <ToastContainer />
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout