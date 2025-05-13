// components/LazyIframe.jsx
import React, { useRef, useState, useEffect, forwardRef } from 'react'

export default forwardRef(function LazyIframe({ src, className, ...rest }, ref) {
  const wrapper = useRef(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!wrapper.current) return
    if (!window.IntersectionObserver) {
      setLoaded(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true)
          io.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    io.observe(wrapper.current)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={wrapper} className={className} {...rest}>
      {loaded ? (
        <iframe
          ref={ref}                          // <— forward the ref here
          src={src}
          loading="lazy"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full bg-black"
        />
      ) : (
        <div className="absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center text-white">
          Loading Game…
        </div>
      )}
    </div>
  )
})
