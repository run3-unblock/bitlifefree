// pages/terms-of-service.js
import Head from 'next/head'

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service — BitLife Unblocked</title>
        <meta
          name="description"
          content="Read the Terms of Service for BitLife Unblocked, including user obligations, disclaimers, and cookie policy."
        />
      </Head>
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 container mx-auto px-4 py-12 space-y-6">
        <h1 className="text-4xl font-extrabold text-emerald-700 dark:text-emerald-300">
          Terms of Service
        </h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            1. Acceptance
          </h2>
          <p>
            By using this site, you agree to these terms. If you disagree, please do not access the service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            2. Use License
          </h2>
          <p>
            You may play the game for personal, non-commercial purposes only. You may not redistribute or modify our
            content without permission.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            3. Disclaimers
          </h2>
          <p>
            We provide the service “as is” without warranties. We are not responsible for downtime, data loss, or filter
            bypass failures.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            4. Cookie Policy
          </h2>
          <p>
            Our site uses essential and optional analytics cookies. See{' '}
            <a
              href="/cookie-policy"
              className="text-emerald-600 dark:text-emerald-400 underline"
            >
              Cookie Policy
            </a>{' '}
            for details.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            5. Changes to Terms
          </h2>
          <p>
            We may update these terms at any time. Last updated: May 10, 2025.
          </p>
        </section>
      </main>
    </>
  )
}
