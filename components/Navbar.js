// components/Navbar.js
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [dark, setDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef()

  // Toggle the dark class on <html>
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  // Close menu on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuOpen])

  return (
    <nav className="bg-emerald-600 dark:bg-emerald-800 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4 relative">
        {/* Logo + Title */}
        <Link href="/" legacyBehavior>
          <a className="flex items-center hover:underline">
            <img
              src="/bitlife-unblocked.webp"
              alt="BitLife Unblocked logo"
              loading="lazy"
              className="w-8 h-8 md:w-10 md:h-10 mr-2"
            />
            <span className="text-xl font-bold">BitLife Unblocked</span>
          </a>
        </Link>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center space-x-6">
          <Link href="/" legacyBehavior><a className="hover:underline">Home</a></Link>
          <Link href="/guide" legacyBehavior><a className="hover:underline">Guide</a></Link>
          <Link href="/play" legacyBehavior><a className="hover:underline">Play</a></Link>
          {/* Desktop pill dark/light */}
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle dark mode"
            className="relative w-20 h-6 bg-white bg-opacity-25 dark:bg-black dark:bg-opacity-25 rounded-full p-1 transition-colors"
          >
            <span
              className={
                "block w-4 h-4 bg-white dark:bg-emerald-400 rounded-full shadow transform transition-transform " +
                (dark ? "translate-x-14" : "translate-x-0")
              }
            />
            <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white pointer-events-none">
              {dark ? "Dark" : "Light"}
            </span>
          </button>
        </div>

        {/* Mobile right controls */}
        <div className="sm:hidden flex items-center space-x-2" ref={menuRef}>
          {/* Dark mode icon toggle */}
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle dark mode"
            className="w-8 h-8 flex items-center justify-center bg-white bg-opacity-25 dark:bg-black dark:bg-opacity-25 rounded-full transition-colors"
          >
            {dark ? '☀️' : '🌙'}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="w-8 h-8 flex items-center justify-center bg-white bg-opacity-25 dark:bg-black dark:bg-opacity-25 rounded-full transition-colors"
          >
            <div className="space-y-1">
              <span className="block w-5 h-0.5 bg-white"></span>
              <span className="block w-5 h-0.5 bg-white"></span>
              <span className="block w-5 h-0.5 bg-white"></span>
            </div>
          </button>

          {/* Pop-up menu (always in DOM, but animates) */}
          <div
            className={
              `absolute top-full right-4 mt-2 w-40 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 ` +
              `rounded-lg shadow-lg z-50 py-2 transform transition-all ease-out duration-200 ` +
              (menuOpen
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-95 pointer-events-none')
            }
          >
            <Link href="/" legacyBehavior>
              <a className="block px-4 py-2 hover:bg-emerald-100 dark:hover:bg-gray-700">Home</a>
            </Link>
            <Link href="/guide" legacyBehavior>
              <a className="block px-4 py-2 hover:bg-emerald-100 dark:hover:bg-gray-700">Guide</a>
            </Link>
            <Link href="/play" legacyBehavior>
              <a className="block px-4 py-2 hover:bg-emerald-100 dark:hover:bg-gray-700">Play</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
