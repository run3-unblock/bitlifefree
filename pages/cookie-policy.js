// pages/cookie-policy.js
import Head from 'next/head'

export default function CookiePolicy() {
  return (
    <>
      <Head>
        <title>Cookie Policy — BitLife Unblocked</title>
        <meta
          name="description"
          content="Learn how BitLife Unblocked uses cookies for functionality and analytics, and how to manage your preferences."
        />
      </Head>
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 container mx-auto px-4 py-12 space-y-6">
        <h1 className="text-4xl font-extrabold text-emerald-700 dark:text-emerald-300">
          Cookie Policy
        </h1>
        <p>
          We use cookies and local storage to enhance your experience. Here’s what we set:
        </p>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold mt-6 dark:text-gray-100">
            Essential Cookies
          </h2>
          <p>
            These power core features: dark/light mode, saving your game progress, and basic navigation.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold mt-6 dark:text-gray-100">
            Analytics Cookies
          </h2>
          <p>
            Optional, anonymous Google Analytics cookies help us understand performance and usage trends.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold mt-6 dark:text-gray-100">
            Managing Cookies
          </h2>
          <p>
            You can disable or clear cookies at any time via your browser’s privacy settings or by clearing site data.
          </p>
        </section>
      </main>
    </>
  )
}
