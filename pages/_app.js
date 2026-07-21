import "../css/index.css";
import Head from "next/head";
import Layout from "@/components/layout";

import { fontClasses } from "@/lib/fonts";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        {/* Fallback mínimo. Cada página define su propio <head> vía <Seo>,
            que pisa estos valores gracias a los `key` de los metas. */}
        <title>David & Olivar Abogados</title>

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
