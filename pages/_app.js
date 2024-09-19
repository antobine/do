import "../css/index.css";
import Head from "next/head";
import Layout from "/components/layout";

import { fontClasses } from "app/fonts";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>David & Olivar Abogados</title>
        <meta name="description" content="Especialistas en Derecho Penal" />

        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,100..1000&family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        /> */}

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#F2f2f2" />
      </Head>

      <div className={fontClasses}>
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
