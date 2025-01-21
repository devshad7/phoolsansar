'use client'

import React, { useEffect, useRef, useState } from 'react'
import BreadCrumb from './BreadCrumb'
import Link from 'next/link'
import { options } from '@/utils/richTextType'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import HomeAbout from './HomeAbout'
import { Facebook, Instagram, Linkedin, X } from 'lucide-react'

const Blog = ({ post }) => {

    const [scrollProgress, setScrollProgress] = useState(0);
    const contentRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (contentRef.current) {
                const contentRect = contentRef.current.getBoundingClientRect();
                const contentHeight = contentRect.height;
                const contentTop = contentRect.top;
                const contentBottom = contentRect.bottom;

                // Calculate scroll progress only for the content div
                if (contentBottom > 0 && contentTop < window.innerHeight) {
                    const visibleHeight = Math.min(contentHeight, window.innerHeight - contentTop);
                    const progress = (visibleHeight / contentHeight) * 100;
                    setScrollProgress(Math.min(progress, 100));
                } else {
                    setScrollProgress(0);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="2xl:max-w-[95rem] mx-auto px-5 md:px-28 py-10 md:py-8">
                <div className="flex flex-col items-center">
                    <BreadCrumb post={post} />
                    <div className="mt-5 text-center">
                        <span className='text-sm font-semibold text-gray-500'><Link href={''} className='text-indigo-500'>{post.fields.author}</Link> on
                            {' ' + new Date(post.fields.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </span>
                        <h1 className='text-4xl md:text-[52px] md:leading-tight max-w-[920px] mx-auto font-semibold mt-2'>{post.fields.title}</h1>
                        <p className='max-w-[640px] mx-auto mt-2 text-balance text-gray-500'>{post.fields.description}</p>
                        <div className="flex justify-center gap-2 mt-3">
                            {post.fields.category.map((item, index) => (
                                <div className="shadow-categories rounded-md border border-gray-100 py-1 px-2" key={index}>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-5">
                            <img src={post.fields.thumbnail.fields.file.url} alt="" className='rounded-2xl' />
                        </div>
                    </div>
                    {post.fields.content != null ? (
                        <div className="mt-5 md:mt-16 flex flex-col md:flex-row md:gap-x-10 xl:gap-0">
                            <div className="md:block hidden sticky top-4 z-10 h-[370px]">
                                <div className="flex flex-col items-center gap-10">
                                    <div className="relative flex justify-center items-center rounded-full size-20 shadow-categories">
                                        <svg className="h-full w-full" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18" cy="18" r="16" fill="none" strokeWidth="2" strokeDasharray="100" strokeDashoffset={100 - scrollProgress} strokeLinecap="round" stroke="#4f46e5" />
                                        </svg>
                                        <span className="absolute text-sm font-bold">
                                            6 min
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-center gap-5">
                                        <Link href={''} className='hover:text-indigo-500'>
                                            <X />
                                        </Link>
                                        <Link href={''} className='hover:text-indigo-500'>
                                            <Facebook />
                                        </Link>
                                        <Link href={''} className='hover:text-indigo-500'>
                                            <Instagram />
                                        </Link>
                                        <Link href={''} className='hover:text-indigo-500'>
                                            <Linkedin />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col xl:flex-row gap-y-16">
                                <div className="prose md:prose-lg xl:prose-sm 2xl:prose-base dark:prose-invert mx-auto" ref={contentRef}>
                                    {documentToReactComponents(post.fields.content, options)}
                                </div>
                                <HomeAbout />
                            </div>
                        </div>
                    ) : (
                        <span>No Post Details</span>
                    )}
                </div>
            </div>
        </>
    )
}

export default Blog