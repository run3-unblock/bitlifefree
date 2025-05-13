// pages/index.js

import Head from 'next/head'
import Link from 'next/link'
import { useRef } from 'react'

import LazyIframe from '../components/LazyIframe'



export default function Home() {
  const iframeRef = useRef(null)

  return (
    <>
      {/* ===================== <HEAD> ===================== */}
      <Head>
      {/* ===== Title ===== */}
      <title>BitLife Unblocked Life Simulator – Play Free Online (No Ads)</title>

       {/* ===== Meta Description ===== */}
     <meta
      name="description"
    content="Play BitLife Unblocked Life Simulator free in your browser—no ads, no downloads. Works behind school firewalls and on Chromebooks. Start your virtual life now!"
     />
        {/* — Crawl instructions */}
        <meta name="robots" content="index, follow" />
        {/* — Canonical URL */}
        <link rel="canonical" href="https://bitlifefree.com/" />

        {/* — Open Graph tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="BitLife — Play BitLife Unblocked Online Free" />
        <meta
          property="og:description"
          content="Instantly play BitLife Unblocked with zero ads. Safe for school, perfect on Chromebooks & mobiles."
        />
        <meta property="og:url" content="https://bitlifefree.com/" />
        <meta property="og:image" content="https://bitlifefree.com/og-image.webp" />

        {/* — Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BitLife — Play BitLife Unblocked Online Free" />
        <meta
          name="twitter:description"
          content="Jump into the viral life simulator with no ads & no downloads, even at school."
        />
        <meta name="twitter:image" content="https://bitlifefree.com/og-image.webp" />

        {/* — JSON-LD Schema for WebSite, VideoGame & FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebSite',
                  url: 'https://bitlifefree.com',
                  name: 'BitLife Unblocked',
                  description: 'Play BitLife online free. School & Chromebook friendly, ad-free.',
                  inLanguage: 'en',
                  potentialAction: {
                    '@type': 'SearchAction',
                    target: 'https://bitlifefree.com/?s={search_term_string}',
                    'query-input': 'required name=search_term_string',
                  },
                },
                {
                  '@type': 'VideoGame',
                  name: 'BitLife Unblocked',
                  url: 'https://bitlifefree.com',
                  operatingSystem: 'ANY',
                  applicationCategory: 'Game',
                  gamePlatform: ['Web'],
                  genre: ['Simulation', 'Life-Sim'],
                  author: { '@type': 'Organization', name: 'Candywriter, LLC' },
                  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
                },
                {
                  '@type': 'FAQPage',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: 'Is BitLife Unblocked safe to play at school?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes. The game is served over HTTPS and contains no third-party ads or trackers.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Do I need to install anything to play BitLife online?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'No download required. Click “Play Now” and the game loads directly in your browser.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Does BitLife save my progress?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Your decisions are stored locally in your browser cache. Clear it to reset.',
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />

        {/* — BreadcrumbList (Home only) */}
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
                  item: 'https://bitlifefree.com/',
                },
              ],
            }),
          }}
        />

  <link rel="preconnect" href="https://bitlifefree.io" />


      </Head>

      {/* ===================== <BODY> ===================== */}
      <main className="bg-gradient-to-b from-emerald-500 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">





    {/* ===== GAME IFRAME ===== */}
        <section id="game" className="mx-auto max-w-screen-xl px-4 py-12">
          <h2 className="sr-only">Play BitLife Unblocked</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white dark:text-gray-100 leading-tight mb-4">
            BitLife <span className="text-yellow-300">Unblocked</span> — Play Online Free
          </h1>
          <p className="text-center mb-12 text-lg text-white/90 dark:text-gray-200/90">
            Play the official BitLife Unblocked simulator in your browser—100% free, ad-free, works at school & on any device.
          </p>

          <div className="flex justify-center">
            <LazyIframe
              ref={iframeRef}                 // <— attach your ref here
              src="https://bitlifefree.io/elife-simulator/"
              className="relative w-full max-w-screen-lg h-[500px] md:h-[650px] transition-all duration-300 rounded-xl overflow-hidden shadow-lg"
            />
          </div>

          {/* — Fullscreen button (unchanged design) */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => iframeRef.current?.requestFullscreen()}
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
        </section>






        {/* ===== HERO ===== */}
        <section id="hero" className="text-center py-20 px-4">
          {/* — Logo image */}
          <img
            src="/bitlife-unblocked.webp"
            alt="BitLife Unblocked logo"
            loading="lazy"
            className="mx-auto mb-8 w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
          />

          {/* — Tagline */}
          <p className="mt-6 max-w-2xl mx-auto text-lg text-white/90 dark:text-gray-200/90">
            Live a thousand lives in one click. No ads, no installs—just pure, unfiltered BitLife on any device, even behind the strictest school firewall.
          </p>

          {/* — “Play Now” anchor */}
          <a
            href="#game"
            className="mt-10 inline-block bg-yellow-400 text-black font-semibold py-3 px-10 rounded-full shadow-lg hover:bg-yellow-300 transition"
          >
            Play Now
          </a>

          {/* — Trending keywords */}
          <p className="mt-3 text-sm text-white/80 dark:text-gray-400">
            <strong>Trending:</strong> bitlife online • bitlife unblocked games • bitlife pc edition
          </p>
        </section>

        {/* ===== WHAT IS BITLIFE ===== */}
        <section id="about" className="max-w-5xl mx-auto px-4 py-20 space-y-10 text-gray-700 dark:text-gray-300">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">
            What Is BitLife?
          </h2>
          <p className="leading-relaxed">
            BitLife is the viral <strong>text-based life-simulation game</strong> where every click writes a new chapter. Choose your birthplace, chase a medical career, turn to a life of crime, adopt pets, build property empires—or all of the above. With <strong>40+ careers, 40 collectible ribbons, weekly challenges</strong> and endless random events, no two lives are ever alike.
          </p>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Why Play BitLife Unblocked Here?</h3>
              <ul className="list-disc list-inside space-y-3">
                <li><strong>Ad-Free Experience:</strong> zero pop-ups, banners or forced videos.</li>
                <li><strong>School & Work Safe:</strong> HTTPS delivery + DNS-over-HTTPS bypass typical filters.</li>
                <li><strong>Chromebook Optimized:</strong> responsive PWA runs smoothly on ChromeOS touchscreens.</li>
                <li><strong>One-Tap Mobile:</strong> install as an app icon—offline play supported.</li>
                <li><strong>Free Forever:</strong> no paywalls, subscriptions or sign-ups.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Key Gameplay Highlights</h3>
              <ul className="list-disc list-inside space-y-3">
                <li>Branch into <em>law school, military, modelling</em> or <em>bank robbery</em>.</li>
                <li>Dynamic relationships: friends, lovers, spouses & frenemies.</li>
                <li>Real-estate market with mortgages & rental income.</li>
                <li>Pet adoption from dogs & cats to mythical creatures.</li>
                <li>Secret <em>God Mode</em> & time travel for ultimate control.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===== HOW TO UNBLOCK ===== */}
        <section id="unblock-guide" className="bg-white dark:bg-gray-700 py-20 px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
              How to Play BitLife at School (or Anywhere) 📚
            </h2>
            <ol className="list-decimal list-inside space-y-4 text-gray-800 dark:text-gray-200">
              <li><strong>Use HTTPS.</strong> Our domain is fully SSL-encrypted, so most content filters let it through.</li>
              <li><strong>Switch to Reader Mode</strong> (Chrome Ctrl+Shift+R) to disguise game traffic as text.</li>
              <li><strong>Clear Cookies</strong> after play to erase local save files if privacy is required.</li>
              <li><strong>Offline Trick:</strong> Add to Home Screen on ChromeOS/mobile, then launch without Wi-Fi.</li>
            </ol>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Need more unblocking tips? Check our{' '}
              <Link href="/guide" legacyBehavior><a className="underline">detailed Chromebook guide</a></Link>.
            </p>
          </div>
        </section>

        {/* ===== TOP SEARCHED PHRASES ===== */}
        <section id="keywords" className="bg-gray-50 dark:bg-gray-800 py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">
              🔥 Most-Searched BitLife Keywords (2025)
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4 text-gray-800 dark:text-gray-200">
              {[
                'bitlife unblocked no ads online',
                'play bitlife at school chromebook',
                'bitlife life simulator free for pc',
                'download bitlife apk latest version',
                'how to escape prison in bitlife',
                'how to become president in bitlife',
                'how to get lustful ribbon in bitlife',
                'how to rob a train in bitlife',
              ].map((kw) => (
                <li
                  key={kw}
                  className="bg-yellow-100 dark:bg-emerald-900/30 px-4 py-2 rounded-md shadow-inner"
                >
                  <span className="mr-1">🔍</span>
                  {kw}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ===== TESTIMONIALS ===== */}
        <section id="testimonials" className="bg-emerald-100 dark:bg-gray-900 py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-gray-100">
              What Players Say 💬
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                ['Finally a BitLife that runs behind our school firewall!', 'Sam T.'],
                ['No ads on mobile, buttery smooth gameplay.', 'Mia K.'],
                ['Loads in two seconds on my Chromebook.', 'Devon R.'],
              ].map(([quote, author], i) => (
                <figure
                  key={i}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
                >
                  <blockquote className="italic mb-4">“{quote}”</blockquote>
                  <figcaption className="text-right font-semibold">— {author}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section id="faq" className="bg-white dark:bg-gray-700 py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100">
              Frequently Asked Questions
            </h2>
            {[
              [
                'Is BitLife Unblocked legal?',
                'Yes. We embed the publicly available web build and do not host pirated APKs. BitLife is a trademark of Candywriter, LLC.',
              ],
              [
                'Will this work on my phone?',
                'Absolutely. Our layout is mobile-first and supports all major browsers.',
              ],
              [
                'Can I download the original BitLife app?',
                'Sure—visit the official App Store or Google Play link below the game frame.',
              ],
              [
                'My progress disappeared—why?',
                'Progress lives in local storage. Incognito mode or clearing site data will reset your life.',
              ],
            ].map(([q, a], i) => (
              <details
                key={i}
                className="mb-5 bg-gray-50 dark:bg-gray-800 p-5 rounded-lg shadow-inner"
              >
                <summary className="cursor-pointer font-medium text-gray-900 dark:text-gray-100">
                  {q}
                </summary>
                <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* No inline footer here — your global Footer component is in _app.js */}
      </main>
    </>
  )
}