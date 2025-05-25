import AllBlogs from '@/components/AllBlogs'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
    return (
        <>
            <Navbar />
            <AllBlogs />
            <Footer />
        </>
    )
}

export default page