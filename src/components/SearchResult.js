'use client'

import { createClient } from 'contentful';
import React, { useEffect, useState } from 'react'
import BreadCrumb from './BreadCrumb';
import { Clock } from 'lucide-react';
import Link from 'next/link';

const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    environment: 'master',
});


const SearchResult = ({ query }) => {

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    async function getPosts() {
        try {
            const entries = await client.getEntries({
                content_type: 'blogPost',
                query: query
            });
            setPosts(entries.items);
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError('Error fetching posts.');
            console.error("Error fetching entries:", error);
        }
    }

    useEffect(() => {
        if (query) {
            getPosts(query)
        }
    }, [query]);

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <>
            <div className="2xl:max-w-[95rem] mx-auto px-5 md:px-28 py-5 md:py-8">
                <BreadCrumb post={query} />
                <h1 className='text-4xl md:text-5xl font-semibold py-5 md:py-10'>Search Result: {query}</h1>
                {loading === false ? (
                    posts.length > 0 ? (
                        <div className="flex xl:flex-wrap xl:flex lg:grid lg:grid-cols-2 flex-wrap gap-x-8 gap-8 lg:gap-y-12 mt-5">
                            {posts.map((post) => (
                                <div className="flex flex-col xl:w-[350px] gap-3" key={post.sys.id}>
                                    <Link href={''} className="group relative xl:w-[350px] h-[225px] rounded-xl overflow-hidden">
                                        <img
                                            src={post.fields.thumbnail.fields.file.url}
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 flex">
                                            <div className="pt-4 px-4 flex justify-between w-full">
                                                <div className="flex gap-2 text-xs tracking-widest font-bold">
                                                    {post.fields.category.map((category, index) => (
                                                        <div className="h-2 rounded-lg flex justify-center items-center py-3 px-3 bg-white" key={index}>
                                                            <span>{category}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="hidden group-hover:block">
                                                    <div className="text-white text-sm bg-primary-read h-2 py-4 px-4 flex justify-center items-center rounded-full gap-2">
                                                        <Clock size={18} />
                                                        <span>{post.fields.readTime} Min Read</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="flex flex-col gap-1">
                                        <span className='text-sm font-semibold text-gray-500'><Link href={''} className='text-indigo-500'>{post.fields.author}</Link> on
                                            {' ' + new Date(post.fields.date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </span>
                                        <Link href={`/blog/${post.fields.slug}`} className='text-xl font-bold'>{post.fields.title.substring(0, 55)}</Link>
                                        <p className='text-gray-500'>{post.fields.description.substring(0, 140)}...</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="">No Post Found</div>
                    )
                ) : (
                    <div className="">Loading...</div>
                )}
            </div>
        </>
    )
}

export default SearchResult