// pages/contact-us.js
import Head from 'next/head'

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Contact Us — BitLife Unblocked</title>
        <meta
          name="description"
          content="Get in touch with the BitLife Unblocked team for feedback, support, or partnership inquiries."
        />
      </Head>

      {/* 
        You can adjust the vertical position by changing `pt-24` 
        (padding-top) to a smaller (pt-16, pt-12) or larger value as needed.
      */}
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex items-start justify-center pt-24 px-4">
        <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10">
          <h1 className="text-4xl font-extrabold text-emerald-700 dark:text-emerald-400 mb-6 text-center">
            Contact Us
          </h1>
          <p className="mb-4 text-center">
            Have questions or feedback? We’d love to hear from you! Please email us at:
          </p>
          <p className="mb-6 text-center">
            <a
              href="mailto:contact@bitlifefree.com"
              className="text-lg font-medium text-emerald-600 dark:text-emerald-300 underline"
            >
              contact@bitlifefree.com
            </a>
          </p>
          <p className="text-center">
            We aim to respond within 48 hours. For bug reports, please include
            details of your device, browser, and any error messages.
          </p>
        </div>
      </main>
    </>
  )
}
