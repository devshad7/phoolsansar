import React from 'react'
import { Facebook, Instagram, Linkedin, MapPin, X } from 'lucide-react'
import Link from 'next/link'
import HomeCarousel from './HomeCarousel'

const HomeAbout = () => {
    return (
        <>
            <div className="xl:w-2/6 flex flex-col gap-6 md:gap-5 mt-10 md:mt-0">
                <div className="p-8 rounded-2xl bg-white shadow-categories w-full">
                    <span className='text-xs uppercase font-bold text-gray-500'>About Author</span>
                    <div className="flex items-center gap-2 mt-3">
                        <img src="/assets/blog1.webp" alt="" className='size-[50px] rounded-full' />
                        <div className="">
                            <h1 className='md:text-lg font-bold'>Ethan Caldwell</h1>
                            <p className='text-sm font-semibold text-gray-500'>Reflective Blogger</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p>Ethan Caldwell shares thoughtful insights and reflections on life, culture, and personal growth. His work explores the intersections of creativity and experience, offering readers unique perspectives.</p>
                    </div>
                    <div className="flex items-center mt-3 gap-2 font-semibold">
                        <MapPin className='text-indigo-500' />
                        <span>Nautanwa, India</span>
                    </div>
                    <div className="flex items-center mt-4 gap-5">
                        <Link href={''} className='hover:text-indigo-500'>
                            <X size={22} />
                        </Link>
                        <Link href={''} className='hover:text-indigo-500'>
                            <Facebook size={22} />
                        </Link>
                        <Link href={''} className='hover:text-indigo-500'>
                            <Instagram size={22} />
                        </Link>
                        <Link href={''} className='hover:text-indigo-500'>
                            <Linkedin size={22} />
                        </Link>
                    </div>
                </div>
                <HomeCarousel />
            </div>
        </>
    )
}

export default HomeAbout