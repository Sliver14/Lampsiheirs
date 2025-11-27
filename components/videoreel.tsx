'use client'

import Reveal from './reveal'
import Image from 'next/image'

const YOUTUBE_VIDEO_ID = '' // ← Replace with your actual YouTube video ID dQw4w9WgXcQ

export default function VideoReelCompilation() {
  const thumbnailUrl = `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`
  const youtubeUrl = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&playsinline=1&rel=0&modestbranding=1`

  const openFullscreenVideo = () => {
    // Using iframe in a full-screen overlay trick that triggers native fullscreen on mobile
    const iframe = document.createElement('iframe')
    iframe.src = youtubeUrl
    iframe.allow = 'autoplay; fullscreen; encrypted-media'
    iframe.allowFullscreen = true
    iframe.style.position = 'fixed'
    iframe.style.top = '0'
    iframe.style.left = '0'
    iframe.style.width = '100%'
    iframe.style.height = '100%'
    iframe.style.border = 'none'
    iframe.style.zIndex = '9999'
    iframe.style.background = 'black'

    document.body.appendChild(iframe)

    // Request fullscreen
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen()
    } else if (iframe.webkitRequestFullscreen) {
      iframe.webkitRequestFullscreen()
    } else if (iframe.msRequestFullscreen) {
      iframe.msRequestFullscreen()
    }

    // When fullscreen exits, remove the iframe
    const exitHandler = () => {
      if (
        !document.fullscreenElement &&
        !document.webkitFullscreenElement &&
        !document.msFullscreenElement
      ) {
        document.body.removeChild(iframe)
        document.removeEventListener('fullscreenchange', exitHandler)
        document.removeEventListener('webkitfullscreenchange', exitHandler)
        document.removeEventListener('msfullscreenchange', exitHandler)
      }
    }

    document.addEventListener('fullscreenchange', exitHandler)
    document.addEventListener('webkitfullscreenchange', exitHandler)
    document.addEventListener('msfullscreenchange', exitHandler)
  }

  return (
    <section
      className="relative py-12 md:py-20 w-screen flex justify-center overflow-hidden"
      style={{
        backgroundImage: `url('/Gold_Background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll',
      }}
    >
      <div className="absolute inset-0 bg-amber-950/80" />

      <Reveal>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              See Our Work in Action
            </h2>
            <p className="text-lg font-light text-white">
              <span className="hidden md:inline">
                From tiles to complete bathroom transformations —
              </span>{' '}
              watch real projects come to life.
            </p>
          </div>

          {/* YouTube Thumbnail + Play Button */}
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
            onClick={openFullscreenVideo}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && openFullscreenVideo()}
          >
            {/* Thumbnail */}
            <div className="relative aspect-video w-full bg-black">
              <Image
                src={thumbnailUrl}
                alt="Video thumbnail - Our work in action"
                fill
                className="object-cover"
                unoptimized // YouTube thumbnails are external
                priority
              />
            </div>

            {/* Big Centered Play Button */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-white ml-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7L8 5z" />
                </svg>
              </div>
            </div>

            {/* Optional subtle pulse animation */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-4 border-white/30 animate-ping opacity-75" />
            </div>
          </div>

          {/* Caption */}
          <p className="text-center text-white/60 mt-6 text-sm md:text-base">
            Real installations across Lagos & nationwide • Tap to play
          </p>
        </div>
      </Reveal>
    </section>
  )
}