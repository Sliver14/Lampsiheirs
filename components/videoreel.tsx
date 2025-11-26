// 'use client'

// import { useState, useRef } from 'react'
// import { Play, Pause } from 'lucide-react'
// import Reveal from './reveal'

// export default function VideoReelCompilation() {
//   const [isPlaying, setIsPlaying] = useState(false)
//   const videoRef = useRef<HTMLVideoElement>(null)

//   const togglePlay = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause()
//       } else {
//         videoRef.current.play()
//       }
//       setIsPlaying(!isPlaying)
//     }
//   }

//   return (
//     <section 
//     className="relative py-12 md:py-20 w-screen flex justify-center overflow-hidden"
//     style={{
//         backgroundImage: `url('/Gold_Background.jpg')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         backgroundAttachment: 'scroll',
//       }}
//     >
//       {/* Light overlay to match the "Why" section */}
//       <div className="absolute inset-0 bg-amber-950/80" />
//       {/* <div className="absolute inset-0 bg-linear-to-b from-white/90 via-white/60 to-white/90" /> */}
//       <Reveal>
//         <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
//             See Our Work in Action
//           </h2>
//           <p className="text-lg font-light text-white">
//             <span className="hidden md:inline">From tiles to complete bathroom transformations —</span> watch real projects come to life.
//           </p>
//         </div>

//         {/* Video Container */}
//         <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
//           <video
//             ref={videoRef}
//             className="w-full aspect-video object-cover"
//             poster="/5-bedroom-apartment-tiling-installation.jpg" 
//             src="/video/lampsiheirs-video-reel.mp4"
//             loop
//             playsInline
//             muted={false} 
//             onClick={togglePlay}
//           />

//           {/* Cover Play Button (only shows when paused) */}
//           {!isPlaying && (
//             <div className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer">
//               <Play 
//                 className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 text-white ml-2 shrink-0" 
//                 fill="currentColor" 
//                 onClick={togglePlay}
//               />
//             </div>
//           )}

//           {/* Small Play/Pause Icon (bottom right) */}
//           <button
//             onClick={togglePlay}
//             className="absolute bottom-4 right-4 w-12 h-12 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center text-white backdrop-blur transition"
//           >
//             {isPlaying ? <Pause className="w-6 h-6" /> : <Play className=" hidden w-6 h-6 ml-1" fill="currentColor" />}
//           </button>
//         </div>

//         {/* Optional Caption */}
//         <p className="text-center text-white/50 mt-6 text-sm md:text-base">
//           Real installations across Lagos & nationwide • Tap to play
//         </p>
//       </div>
//       </Reveal>
      
//     </section>
//   )
// }

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