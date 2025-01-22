'use client'

import { createClient } from 'contentful';
import React, { useEffect, useState } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import Link from 'next/link'
import Autoplay from 'embla-carousel-autoplay'
import FeaturedLoader from './loader/FeaturedLoader';

const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    environment: 'master',
});

const HomeCarousel = () => {

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    async function getPosts() {
        try {
            const entries = await client.getEntries({ content_type: 'featuredPosts' });
            const res = entries.items.flatMap((e) => e.fields.posts)
            setPosts(res);
            setLoading(false)
        } catch (error) {
            setError('Error fetching posts.');
            console.error("Error fetching entries:", error);
            setLoading(false)
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <>
            {loading === false ? (
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
                            {posts.map((post) => (
                                <CarouselItem key={post.sys.id}>
                                    <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
                                        <img src={post.fields.thumbnail.fields.file.url} alt="" className='w-full h-full object-cover' />
                                        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-between rounded-2xl py-7 px-7">
                                            <div className="flex">
                                                <div className="h-2 rounded-lg flex justify-center items-center py-3 px-3 bg-white text-xs tracking-widest font-bold">
                                                    <span>{post.fields.category[0]}</span>
                                                </div>
                                                <div className=""></div>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <span className='text-sm font-semibold text-gray-300'><Link href={''} className='text-white hover:text-gray-200'>{post.fields.author}</Link> on
                                                    {' ' + new Date(post.fields.date).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric'
                                                    })}
                                                </span>
                                                <Link href={`/blog/${post.fields.slug}`} className='text-xl font-bold text-white hover:text-gray-200'>{post.fields.title}</Link>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className='hidden group-hover:block'>
                            <CarouselPrevious className='absolute -left-4' />
                        </div>
                        <div className="hidden group-hover:block">
                            <CarouselNext className='absolute -right-4' />
                        </div>
                    </Carousel>
                </div>
            ) : (
                <FeaturedLoader />
            )}
        </>
    )
}

export default HomeCarousel