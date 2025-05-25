"use client"

import { createClient } from 'contentful';
import { Clock } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    environment: 'master',
});


const AllBlogs = () => {

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    async function getPosts() {
        try {
            const entries = await client.getEntries({ content_type: 'blogPost' });
            setPosts(entries.items);
            setLoading(false)
            console.log(entries.items);

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
            <div className="2xl:max-w-[95rem] mx-auto px-5 md:px-28 pt-2 md:pt-10 py-10">
                <div className="flex md:grid md:grid-cols-3 flex-wrap gap-x-8 gap-8 md:gap-y-12">
                    {posts.map((blog) => (
                        <div className="flex flex-col xl:w-[400px] gap-3" key={blog.sys.id}>
                            <Link href={`/blog/${blog.fields.slug}`} className="group relative xl:w-[400px] h-[225px] rounded-xl overflow-hidden">
                                <img
                                    src={blog.fields.thumbnail.fields.file.url}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 flex">
                                    <div className="pt-4 px-4 flex justify-between w-full">
                                        <div className="flex gap-2 text-xs tracking-widest font-bold">
                                            {blog.fields.category.map((category, index) => (
                                                <div className="h-2 rounded-lg flex justify-center items-center py-3 px-3 bg-white" key={index}>
                                                    <span>{category}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="hidden group-hover:block">
                                            <div className="text-white text-sm bg-primary-read h-2 py-4 px-4 flex justify-center items-center rounded-full gap-2">
                                                <Clock size={18} />
                                                <span>{blog.fields.readTime} Min Read</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <div className="flex flex-col gap-1">
                                <span className='text-sm font-semibold text-gray-500'><Link href={''} className='text-indigo-500'>{blog.fields.author}</Link> on
                                    {' ' + new Date(blog.fields.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </span>
                                <Link href={`/blog/${blog.fields.slug}`} className='text-xl font-bold'>{blog.fields.title.substring(0, 55)}</Link>
                                <p className='text-gray-500'>{blog.fields.description.substring(0, 140)}...</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AllBlogs