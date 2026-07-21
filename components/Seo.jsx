import Head from "next/head";

const SITE_URL = "https://www.davidolivar.com.ar";
const SITE_NAME = "David & Olivar Abogados";

// Structured data del estudio — se inyecta en TODAS las páginas.
const legalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "David & Olivar Abogados",
  description: "Estudio jurídico especializado en derecho penal.",
  url: "https://www.davidolivar.com.ar",
  logo: "https://www.davidolivar.com.ar/do-david-olivar-logo.svg",
  image: "https://www.davidolivar.com.ar/og-default.png",
  telephone: "+541154002499",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Uruguay 572, 3° A",
    addressLocality: "Ciudad Autónoma de Buenos Aires",
    addressCountry: "AR",
    postalCode: "C1015ABL",
  },
  areaServed: "Argentina",
  knowsLanguage: "es",
};

export default function Seo({
  title,
  description,
  path,
  ogImage = "/og-default.png",
  jsonLd,
}) {
  const canonical = `${SITE_URL}${path}`;
  const ogImageUrl = `${SITE_URL}${ogImage}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} key="description" />
      <link rel="canonical" href={canonical} key="canonical" />

      {/* Open Graph */}
      <meta property="og:type" content="website" key="og:type" />
      <meta property="og:title" content={title} key="og:title" />
      <meta
        property="og:description"
        content={description}
        key="og:description"
      />
      <meta property="og:url" content={canonical} key="og:url" />
      <meta property="og:image" content={ogImageUrl} key="og:image" />
      <meta property="og:locale" content="es_AR" key="og:locale" />
      <meta property="og:site_name" content={SITE_NAME} key="og:site_name" />

      {/* Twitter */}
      <meta
        name="twitter:card"
        content="summary_large_image"
        key="twitter:card"
      />
      <meta name="twitter:title" content={title} key="twitter:title" />
      <meta
        name="twitter:description"
        content={description}
        key="twitter:description"
      />
      <meta name="twitter:image" content={ogImageUrl} key="twitter:image" />

      {/* Structured data — estudio (siempre presente) */}
      <script
        type="application/ld+json"
        key="jsonld-legalservice"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(legalServiceJsonLd),
        }}
      />

      {/* Structured data — específico de la página (opcional) */}
      {jsonLd && (
        <script
          type="application/ld+json"
          key="jsonld-page"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </Head>
  );
}
