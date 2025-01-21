import BlogList from '@/components/BlogList'
import Navbar from '@/components/Navbar'
import React from 'react'

function page() {
  return (
    <>
    {/* <Navbar />
    <div className="absolute top-0 w-full h-screen flex justify-center items-center -z-30">
      <span>503 | Coming soon</span>
    </div> */}
    <BlogList />
    </>
  )
}

export default page