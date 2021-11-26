import "../styles/index.scss"
import type { AppProps /*, AppContext */ } from "next/app"
import React, { PropsWithChildren } from "react"
import Head from "next/head"
import { Header } from "../components/header"
import icon from "../public/icon.svg"
import { Footer } from "../components/footer"

export default function App({ Component, pageProps }: AppProps<PropsWithChildren<{}>>) {
    return (
        <div className="d-flex flex-column fullscreen">
            <Head>
                <title>co-flex</title>
                <meta name="description" content="Architecting shared applications using js & node.js."></meta>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" type="image/svg+xml" href={icon} />
                <link rel="mask-icon" href={icon} color="#fff" />
            </Head>
            <Header selectedIndex={-1} />
            <div className="container-lg p-3">
                <Component {...pageProps} />
            </div>
            <Footer />
        </div>
    )
}
