import React from 'react'
import Blogs from './Blogs'
import HomeAbout from './HomeAbout'

const HomeBlogs = () => {
    return (
        <>
            <div className="2xl:max-w-[95rem] mx-auto px-5 md:px-28 py-5">
                <div className="flex flex-col xl:flex-row justify-between lg:gap-8">
                   <Blogs />
                    <HomeAbout />
                </div>
            </div>
        </>
    )
}

export default HomeBlogs
