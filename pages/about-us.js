// pages/about-us.js
import Head from 'next/head'

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us — BitLife Unblocked</title>
        <meta
          name="description"
          content="Meet the team behind BitLife Unblocked: our mission to deliver an ad-free, school-friendly gaming experience for Chromebooks and networks."
        />
      </Head>

      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-16 px-4">
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10">
          <h1 className="text-4xl font-extrabold text-emerald-700 dark:text-emerald-400 mb-6 text-center">
            About Us
          </h1>

          <section className="space-y-6">
            <p>
              Welcome to <strong>BitLife Unblocked</strong>—a fan-built project by
              students, developers, and educators who love the original BitLife
              experience but wanted a truly ad-free, school-friendly, and
              lightning-fast version.
            </p>

            <p>Our mission is simple:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>No ads, pop-ups, or forced videos.</li>
              <li>Seamless HTTPS delivery for behind-the-firewall access.</li>
              <li>Chromebook-optimized, mobile-first Progressive Web App (PWA).</li>
              <li>Free forever—no paywalls, sign-ups, or email traps.</li>
            </ul>

            <p>
              We are not affiliated with Candywriter, the official BitLife
              developers. We’re simply passionate fans providing a reliable
              mirror and enhanced UX for all players—students, teachers, and
              casual gamers alike.
            </p>

            <p>
              Questions, feedback, or issues?{' '}
              <a
                href="/contact-us"
                className="text-emerald-600 underline"
              >
                Get in touch
              </a>
              , and we’ll be happy to help!
            </p>
          </section>
        </div>
      </main>
    </>
  )
}
