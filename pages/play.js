// pages/play.js

import Head from 'next/head'

export default function Play() {
  return (
    <>
      <Head>
        <title>Play BitLife Unblocked</title>
        <meta
          name="description"
          content="Ad-free, lightning-fast BitLife in your browser. School- and Chromebook-friendly."
        />

        {/* — BreadcrumbList for Play */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bitlifefree.com/" },
                { "@type": "ListItem", "position": 2, "name": "Play", "item": "https://bitlifefree.com/play" }
              ]
            })
          }}
        />
      </Head>

      <main className="container mx-auto px-4 py-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-6">
          Play BitLife Unblocked
        </h1>
        <div className="flex justify-center">
          <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl border-4 border-emerald-500 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://bitlifefree.io/elife-simulator/"
              title="BitLife Unblocked Game"
              width="100%"
              height="600"
              className="block bg-black"
              allowFullScreen
            />
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <button
            onClick={() => document.querySelector('iframe')?.requestFullscreen()}
            className="inline-flex items-center bg-gradient-to-r from-emerald-400 to-emerald-600 hover:from-emerald-500 hover:to-emerald-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 3H5a2 2 0 00-2 2v3m0 8v3a2 2 0 002 2h3m8-16h3a2 2 0 012 2v3m0 8v3a2 2 0 01-2 2h-3"
              />
            </svg>
            <span className="ml-2">Fullscreen</span>
          </button>
        </div>
      </main>
    </>
  )
}
