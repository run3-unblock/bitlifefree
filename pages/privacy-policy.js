// pages/privacy-policy.js
import Head from 'next/head'

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — BitLife Unblocked</title>
        <meta
          name="description"
          content="Read the Privacy Policy for BitLife Unblocked: what data we collect, how we use cookies, and your rights."
        />
      </Head>
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold text-emerald-700 dark:text-emerald-300 mb-6">
          Privacy Policy
        </h1>
        <p className="mb-4">
          We respect your privacy. This policy explains what information we collect and how we use it.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-2">
          1. Information Collection
        </h2>
        <p className="mb-4">
          We do not require accounts or logins. We only use cookies and local storage to:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Remember your dark-mode preference.</li>
          <li>Save your game progress locally.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-2">
          2. Cookies & Tracking
        </h2>
        <p className="mb-4">
          We use minimal cookies:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Essential cookies for theme & progress.</li>
          <li>Optional analytics cookies if you consent.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-2">
          3. Third-Party Services
        </h2>
        <p className="mb-4">
          We include Google Analytics (anonymized) to monitor performance. No personal data is shared with advertisers.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-2">
          4. Your Rights
        </h2>
        <p className="mb-4">
          You can clear your browser data at any time to remove cookies and local storage. For questions,
          email{' '}
          <a
            href="mailto:contact@bitlifefree.com"
            className="text-emerald-600 dark:text-emerald-400 underline"
          >
            contact@bitlifefree.com
          </a>.
        </p>
      </main>
    </>
  )
}
