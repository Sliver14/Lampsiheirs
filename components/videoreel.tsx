'use client'

import { useState, useRef } from 'react'
import { Play, Pause } from 'lucide-react'

export default function VideoReelCompilation() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
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
      {/* Light overlay to match the "Why" section */}
      <div className="absolute inset-0 bg-amber-950/80" />
      {/* <div className="absolute inset-0 bg-linear-to-b from-white/90 via-white/60 to-white/90" /> */}

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            See Our Work in Action
          </h2>
          <p className="text-lg font-light text-white">
            <span className="hidden md:inline">From tiles to complete bathroom transformations —</span> watch real projects come to life.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
          <video
            ref={videoRef}
            className="w-full aspect-video object-cover"
            poster="/5-bedroom-apartment-tiling-installation.jpg" 
            src="/video/lampsiheirs-video-reel.mp4"
            loop
            playsInline
            muted={false} 
            onClick={togglePlay}
          />

          {/* Cover Play Button (only shows when paused) */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer">
              <Play 
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 text-white ml-2 shrink-0" 
                fill="currentColor" 
                onClick={togglePlay}
              />
            </div>
          )}

          {/* Small Play/Pause Icon (bottom right) */}
          <button
            onClick={togglePlay}
            className="absolute bottom-4 right-4 w-12 h-12 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center text-white backdrop-blur transition"
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className=" hidden w-6 h-6 ml-1" fill="currentColor" />}
          </button>
        </div>

        {/* Optional Caption */}
        <p className="text-center text-white/50 mt-6 text-sm md:text-base">
          Real installations across Lagos & nationwide • Tap to play
        </p>
      </div>
    </section>
  )
}