'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import HTMLFlipBook from 'react-pageflip'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page bg-gray-800" ref={ref}>
      <div className="page-content">
        <Image
          src={props.image.src}
          alt={props.image.alt}
          width={400}
          height={600}
          className="w-full h-full object-cover"
        />
        <p className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white p-2 rounded">
          {props.image.alt}
        </p>
      </div>
    </div>
  )
})

Page.displayName = 'Page'

export default function CoolFontDarkScooterGalleryBook() {
  const images = [
    { id: 1, src: '/placeholder.svg?height=600&width=400', alt: 'Scooter 1' },
    { id: 2, src: '/placeholder.svg?height=600&width=400', alt: 'Scooter 2' },
    { id: 3, src: '/placeholder.svg?height=600&width=400', alt: 'Scooter 3' },
    { id: 4, src: '/placeholder.svg?height=600&width=400', alt: 'Scooter 4' },
    { id: 5, src: '/placeholder.svg?height=600&width=400', alt: 'Scooter 5' },
    { id: 6, src: '/placeholder.svg?height=600&width=400', alt: 'Scooter 6' },
  ]

  const bookRef = useRef(null)

  return (
    <div className={`min-h-screen bg-gradient-to-b from-black to-gray-900 flex flex-col items-center justify-center p-4 text-gray-100 ${spaceGrotesk.className}`}>
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-100 mb-2 tracking-tight">City Scooter Gallery</h1>
        <p className="text-xl text-gray-300">Flip through our collection of urban scooters</p>
      </header>

      <div className="relative w-full max-w-3xl aspect-[3/4]">
        <HTMLFlipBook
          width={400}
          height={600}
          size="stretch"
          minWidth={300}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          ref={bookRef}
          className="book-gallery"
        >
          {images.map((image) => (
            <Page key={image.id} image={image} />
          ))}
        </HTMLFlipBook>

        <Button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white"
          onClick={() => bookRef.current.pageFlip().flipPrev()}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous page</span>
        </Button>
        <Button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white"
          onClick={() => bookRef.current.pageFlip().flipNext()}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next page</span>
        </Button>
      </div>

      <footer className="mt-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} City Scooter Gallery. All rights reserved.</p>
      </footer>
    </div>
  )
}
