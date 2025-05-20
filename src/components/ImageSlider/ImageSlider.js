"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
    {
        src: "/assets/dog-in-circle.webp",
        alt: "Dog looking through a circular opening",
    },
    {
        src: "/assets/cat-window-gaze.png",
        alt: "Cat looking through window",
    },
    {
        src: "/assets/rabbit-in-garden.png",
        alt: "Rabbit in garden",
    },
    {
        src: "/assets/dog-in-circle.webp",
        alt: "Dog looking through a circular opening",
    },
    {
        src: "/assets/cat-window-gaze.png",
        alt: "Cat looking through window",
    },
    {
        src: "/assets/rabbit-in-garden.png",
        alt: "Rabbit in garden",
    },
    {
        src: "/assets/dog-in-circle.webp",
        alt: "Dog looking through a circular opening",
    },
    {
        src: "/assets/cat-window-gaze.png",
        alt: "Cat looking through window",
    },
    {
        src: "/assets/rabbit-in-garden.png",
        alt: "Rabbit in garden",
    },
    {
        src: "/assets/dog-in-circle.webp",
        alt: "Dog looking through a circular opening",
    },
    {
        src: "/assets/cat-window-gaze.png",
        alt: "Cat looking through window",
    },
    {
        src: "/assets/rabbit-in-garden.png",
        alt: "Rabbit in garden",
    },
]

export default function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToPrevious = () => {
        const isFirstImage = currentIndex === 0
        const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastImage = currentIndex === images.length - 1
        const newIndex = isLastImage ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    // auto-slide to next after 2 second
    // useEffect(() => {
    //     const interval = setInterval(goToNext, 3000)
    //     return () => clearInterval(interval)
    // }, [currentIndex])

    return (
        <div className="relative w-full max-w-md px-4">
            <div className="relative">
                <div className="overflow-hidden rounded-3xl shadow-xl bg-black">
                    {/* Dotted line at the top */}
                    <div className="absolute top-4 left-0 right-0 z-10 flex justify-center">
                        <div className="h-[2px] w-full px-5 flex justify-center items-center">
                            {Array.from({ length: images.length }).map((_, i) => (
                                <div key={i} className={`h-[2px] w-full ${i === currentIndex ? 'bg-gray-500' : 'bg-white'} mx-[3px] opacity-80`} />
                            ))}
                        </div>
                    </div>

                    <img
                        src={images[currentIndex].src || "/placeholder.svg"}
                        alt={images[currentIndex].alt}
                        className="w-full h-auto aspect-[3/5] object-cover"
                    />
                </div>

                <button
                    onClick={goToPrevious}
                    className="absolute -left-20 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-colors"
                    aria-label="Previous image"
                >
                    <ChevronLeft className="w-6 h-6 text-gray-800" />
                </button>

                <button
                    onClick={goToNext}
                    className="absolute -right-20 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-colors"
                    aria-label="Next image"
                >
                    <ChevronRight className="w-6 h-6 text-gray-800" />
                </button>
            </div>
        </div>
    )
}
