// pages/404.js
import Link from 'next/link'

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-20 bg-gray-50 dark:bg-gray-900 p-4">
      <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-100 mb-4">404</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        Oops! That page can’t be found.
      </p>
      <Link href="/" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
        Go back home
      </Link>
    </div>
  )
}
