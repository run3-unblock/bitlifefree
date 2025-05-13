// pages/accessibility.js
import Head from 'next/head'

export default function Accessibility() {
  return (
    <>
      <Head>
        <title>Accessibility Statement — BitLife Unblocked</title>
        <meta
          name="description"
          content="Our commitment to accessibility: how we ensure BitLife Unblocked is usable by people with disabilities."
        />
      </Head>
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 container mx-auto px-4 py-12 space-y-6">
        <h1 className="text-4xl font-extrabold text-emerald-700 dark:text-emerald-300 mb-4">
          Accessibility Statement
        </h1>
        <p className="mb-4">
          We strive to make BitLife Unblocked accessible to all users, including those with disabilities.
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>All text has sufficient contrast ratios.</li>
          <li>Interactive elements are labeled and keyboard-navigable.</li>
          <li>Images and iframes include descriptive alt text or titles.</li>
          <li>Responsive design adapts to screen readers and magnifiers.</li>
        </ul>
        <p>
          If you encounter any barriers, please contact us at{' '}
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
