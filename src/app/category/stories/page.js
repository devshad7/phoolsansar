import ImageSlider from '@/components/ImageSlider/ImageSlider'
import React from 'react'

const page = () => {
    return (
        <>
            <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200">
                <ImageSlider />
            </div>
        </>
    )
}

export default page