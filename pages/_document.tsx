import Document, { Head, Main, NextScript, NextDocumentContext } from "next/document";

import Info from "../components/Header/Info";
import Stats from "../components/Header/Stats";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: NextDocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    let jsonld = JSON.stringify({
      "@context": "http://schema.org/",
      "@type": "WebSite",
      name: "SA:MP Servers",
      publisher: {
        "@type": "Person",
        name: "Southclaws"
      },
      image: "http://www.sa-mp.com/images/logo.gif",
      author: {
        "@type": "Person",
        name: "Southclaws"
      },
      description:
        "A SA:MP server listing service that does not rely on the official " +
        "masterlist where anyone can post server or search for servers."
    });

    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="theme-color" content="#FF3200" />
          <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="stylesheet" href="/style.css" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />

          <script type="application/ld+json">{jsonld}</script>
        </Head>

        <body>
          <div id="container">
            <Main />
            <Info />
            <Stats />
            <NextScript />
          </div>
        </body>
      </html>
    );
  }
}