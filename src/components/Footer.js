import React from 'react'
import MainLogo from './Logo'
import { Facebook, Instagram, Linkedin, X } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
    return (
        <>
            <div className="2xl:max-w-[95rem] mx-auto px-5 pb-8 md:px-28 pt-12 md:pb-12">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="">
                        <MainLogo />
                        <div className="mt-5 md:mt-4">
                            <p className='md:w-[410px] text-sm text-gray-500'>Welcome to ultimate source for fresh perspectives! Explore curated content to enlighten, entertain and engage global readers.</p>
                            <div className="flex items-center gap-3 mt-5 md:mt-3">
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
                    </div>
                    <div className="flex mt-8 md:mt-0 gap-10 md:gap-20">
                        <div className="">
                            <span className='text-gray-500 font-semibold'>Quick Links</span>
                            <div className="flex flex-col font-semibold gap-2 mt-4">
                                <Link href={'/trending'} className='hover:underline'>
                                    Disclamer
                                </Link>
                                <Link href={'/stories'} className='hover:underline'>
                                    Abouts Us
                                </Link>
                                <Link href={'/news'} className='hover:underline'>
                                    Contact Us
                                </Link>
                                <Link href={'/news'} className='hover:underline'>
                                    Privacy Policy
                                </Link>
                                <Link href={'/news'} className='hover:underline'>
                                    Terms & Conditions
                                </Link>
                            </div>
                        </div>
                        <div className="">
                            <span className='text-gray-500 font-semibold'>Categories</span>
                            <div className="flex flex-col font-semibold gap-2 mt-4">
                                <Link href={'/category/technology'} className='hover:underline'>
                                    Trending
                                </Link>
                                <Link href={'/category/travel'} className='hover:underline'>
                                    Stories
                                </Link>
                                <Link href={'/category/sport'} className='hover:underline'>
                                    Wold Facts
                                </Link>
                                <Link href={'/category/business'} className='hover:underline'>
                                    Great Personalities
                                </Link>
                            </div>
                        </div>
                        <div className="">
                            <span className='text-gray-500 font-semibold'>Support</span>
                            <div className="flex flex-col font-semibold gap-2 mt-4">
                                <Link href={'mailto:ezaz.raza@gmail.com'} className='hover:underline'>
                                    Email
                                </Link>
                                <Link href={''} className='hover:underline'>
                                    Instagram
                                </Link>
                                <Link href={''} className='hover:underline'>
                                    Facebook
                                </Link>
                                <Link href={''} className='hover:underline'>
                                    Linkedin
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-3 md:mt-0">
                    <span className='text-sm md:text-xs font-semibold text-gray-600'>© 2025 — <Link href={'/'} className='hover:underline'>Phool Sansar</Link>. All Rights Reserved.</span>
                </div>
            </div>
        </>
    )
}

export default Footer