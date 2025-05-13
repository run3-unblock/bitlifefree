// pages/guide.js

import Head from 'next/head'

export default function Guide() {
  return (
    <>
      <Head>
        <title>Guide — How to Play BitLife Unblocked</title>
        <meta
          name="description"
          content="Step-by-step instructions to unblock and play BitLife on school networks, Chromebooks, and all devices without ads or downloads."
        />

        {/* — Open Graph for Guide page */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Guide — How to Play BitLife Unblocked"
        />
        <meta
          property="og:description"
          content="Step-by-step instructions to unblock and play BitLife on school networks, Chromebooks, and all devices without ads or downloads."
        />
        <meta
          property="og:url"
          content="https://bitlifefree.com/guide"
        />
        <meta
          property="og:image"
          content="https://bitlifefree.com/og-image.webp"
        />

        {/* — Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Guide — How to Play BitLife Unblocked"
        />
        <meta
          name="twitter:description"
          content="Step-by-step instructions to unblock and play BitLife on school networks, Chromebooks, and all devices without ads or downloads."
        />
        <meta
          name="twitter:image"
          content="https://bitlifefree.com/og-image.webp"
        />

        {/* — BreadcrumbList for Guide */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://bitlifefree.com/'
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Guide',
                  item: 'https://bitlifefree.com/guide'
                }
              ]
            })
          }}
        />
      </Head>

      <main className="container mx-auto py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="max-w-3xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mx-auto">
          <h1 className="text-4xl font-extrabold text-emerald-700 dark:text-emerald-300 text-center mb-6">
            How to Play BitLife Unblocked
          </h1>
          <ol className="list-decimal list-inside space-y-4 text-gray-800 dark:text-gray-200">
            <li>
              <strong>Visit our site</strong>: go to{' '}
              <a
                href="https://bitlifefree.com"
                className="text-emerald-600 dark:text-emerald-400 underline"
                target="_blank"
                rel="noopener"
              >
                bitlifefree.com
              </a>{' '}
              via HTTPS.
            </li>
            <li>
              <strong>Change your DNS:</strong> if it’s blocked, set your DNS to{' '}
              <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">
                1.1.1.1
              </code>{' '}
              or{' '}
              <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">
                8.8.8.8
              </code>{' '}
              in your network settings.
            </li>
            <li>
              <strong>Use the mirror:</strong> still blocked? open{' '}
              <a
                href="https://bitlifefree.io/elife-simulator/"
                className="text-emerald-600 dark:text-emerald-400 underline"
                target="_blank"
                rel="noopener"
              >
                our mirror link
              </a>
              .
            </li>
            <li>
              <strong>Install as PWA:</strong> on mobile or Chromebook, tap
              “Install” in the address bar to add BitLife to your home screen.
            </li>
            <li>
              <strong>Enable Dark Mode:</strong> click the toggle in the
              top-right to switch themes and save battery.
            </li>
          </ol>
          <p className="mt-8 text-center italic text-gray-600 dark:text-gray-400">
            Last updated: May 10, 2025
          </p>
        </div>
      </main>
    </>
  )
}
