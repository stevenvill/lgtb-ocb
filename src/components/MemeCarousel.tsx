'use client'
import useEmblaCarousel from 'embla-carousel-react'
import AutoPlay from 'embla-carousel-autoplay'
import { JSX, useCallback } from 'react'
import Image from 'next/image'
import { memeImages } from '../utils/MemeImages'

/* add new images to /utils/MemeImages.ts file */
export default function MemeCarousel(): JSX.Element {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        AutoPlay({ delay: 4000 })
    ])

    const scrollPrev = useCallback((): void => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback((): void => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className="bg-gradient-to-r from-[#3E7B27] via-[#85A947] to-[#3E7B27] p-4 md:p-8 rounded-3xl max-w-6xl mx-auto mt-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-4 md:p-8 shadow-2xl">
                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {memeImages.map((meme, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 relative">
                                    <div className="relative h-[300px] md:h-[500px] mx-4 flex items-center justify-center bg-black/10 rounded-xl">
                                        <Image
                                            src={meme.src}
                                            alt={meme.alt}
                                            width={meme.width}
                                            height={meme.height}
                                            className="max-h-full max-w-full h-auto w-auto object-contain rounded-xl"
                                            priority={index === 0}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/15 
                     backdrop-blur-sm rounded-full p-2 transition-all"
                        onClick={scrollPrev}
                        type="button"
                        aria-label="Previous slide"
                    >
                        <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>

                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/15 
                     backdrop-blur-sm rounded-full p-2 transition-all"
                        onClick={scrollNext}
                        type="button"
                        aria-label="Next slide"
                    >
                        <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}