import "../css/index.css";
import Head from "next/head";
import Layout from "/components/layout";

import { fontClasses } from "app/fonts";

function MyApp({ Component, pageProps }) {
  return (
    <Layout className={fontClasses}>
      <Head>
        <title>David & Olivar Abogados</title>
        <meta name="Description" content="Especialistas en Derecho Penal" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,100..1000&family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
