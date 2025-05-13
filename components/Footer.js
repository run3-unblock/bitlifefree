// components/Footer.js
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-emerald-600 dark:bg-emerald-800 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row sm:justify-between items-center gap-2 text-sm">
        <span>© 2025 BitLifePro — Fan Project</span>
        <div className="flex flex-wrap justify-center sm:justify-end gap-4">
          <Link href="/about-us" legacyBehavior>
            <a className="underline hover:text-yellow-300">About Us</a>
          </Link>
          <Link href="/contact-us" legacyBehavior>
            <a className="underline hover:text-yellow-300">Contact Us</a>
          </Link>
          <Link href="/privacy-policy" legacyBehavior>
            <a className="underline hover:text-yellow-300">Privacy Policy</a>
          </Link>
          <Link href="/terms-of-service" legacyBehavior>
            <a className="underline hover:text-yellow-300">Terms of Service</a>
          </Link>
          <Link href="/cookie-policy" legacyBehavior>
            <a className="underline hover:text-yellow-300">Cookie Policy</a>
          </Link>
          <Link href="/accessibility" legacyBehavior>
            <a className="underline hover:text-yellow-300">Accessibility</a>
          </Link>
        </div>
      </div>
    </footer>
  )
}
