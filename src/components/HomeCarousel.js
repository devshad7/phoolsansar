'use client'

import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import Link from 'next/link'
import Autoplay from 'embla-carousel-autoplay'

const HomeCarousel = () => {
    return (
        <>
            <div className="w-full h-[300px]">
                    <span className='text-xs uppercase font-semibold'>Featured Posts</span>
                    <Carousel
                        className='rounded-2xl pt-4 group'
                        plugins={[
                            Autoplay({
                                delay: 5000,
                            }),
                        ]}>
                        <CarouselContent>
                            <CarouselItem>
                                <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
                                    <img src="/assets/blog1.webp" alt="" className='w-full h-full object-cover' />
                                    <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-between rounded-2xl py-7 px-7">
                                        <div className="flex">
                                            <div className="h-2 rounded-lg flex justify-center items-center py-3 px-3 bg-white text-xs tracking-widest font-bold">
                                                <span>Business</span>
                                            </div>
                                            <div className=""></div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <span className='text-sm font-semibold text-gray-300'><Link href={''} className='text-white hover:text-gray-200'>Enthan Caldwell</Link> on January 7, 2025</span>
                                            <Link href={''} className='text-xl font-bold text-white hover:text-gray-200'>AI in Business Management: Improving Efficiency and Decision Making</Link>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
                                    <img src="/assets/blog1.webp" alt="" className='w-full h-full object-cover' />
                                    <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-between rounded-2xl py-7 px-7">
                                        <div className="flex">
                                            <div className="h-2 rounded-lg flex justify-center items-center py-3 px-3 bg-white text-xs tracking-widest font-bold">
                                                <span>Business</span>
                                            </div>
                                            <div className=""></div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <span className='text-sm font-semibold text-gray-300'><Link href={''} className='text-white hover:text-gray-200'>Enthan Caldwell</Link> on January 7, 2025</span>
                                            <Link href={''} className='text-xl font-bold text-white hover:text-gray-200'>AI in Business Management: Improving Efficiency and Decision Making</Link>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        <div className='hidden group-hover:block'>
                            <CarouselPrevious className='absolute -left-4' />
                        </div>
                        <div className="hidden group-hover:block">
                            <CarouselNext className='absolute -right-4' />
                        </div>
                    </Carousel>
                </div>
        </>
    )
}

export default HomeCarousel