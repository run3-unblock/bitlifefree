// pages/_app.js
import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Basic meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>BitLife Unblocked — Free Online Life Simulator</title>
        <meta
          name="description"
          content="Play BitLife Unblocked free online. Fast, ad-free, school-friendly life simulator."
        />
        
        <meta name="google-site-verification" content="YOUR_CODE_HERE" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="alternate icon" type="image/svg+xml" href="/favicon.svg" />
        <link
          rel="icon"
          type="image/webp"
          sizes="96x96"
          href="/favicon-96x96.webp"
        />

        {/* Apple Touch Icon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.webp"
        />

        {/* PWA Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#10b981" />

        {/* Open Graph & Twitter Card */}
        <meta
          property="og:image"
          content="https://bitlifefree.com/og-image.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://bitlifefree.com/og-image.webp"
        />
      </Head>

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-P1GW2CRGCJ"
        strategy="afterInteractive"
      />
      <Script id="ga" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config','G-P1GW2CRGCJ');
        `}
      </Script>

      <Navbar />
      <main className="min-h-screen bg-white dark:bg-gray-900 dark:text-gray-100 transition-colors duration-200">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}
