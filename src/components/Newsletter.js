import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

const Newsletter = () => {
    return (
        <>
            <div className="2xl:max-w-[95rem] mx-auto px-5 md:px-28 pt-24">
                <div className="pb-10 md:pb-16 border-b border-gray-100">
                    <div className='max-w-[480px] mx-auto text-center'>
                        <div className="text-center">
                            <h1 className='text-[32px] leading-10 md:leading-normal font-bold'>Subscribe to our Newsletter</h1>
                            <p className='mt-2 md:mt-1 text-gray-400'>Subscribe to our email newsletter to get the latest posts delivered right to your email.</p>
                        </div>
                        <div className="w-[85%] mx-auto flex gap-2 mt-6">
                            <Input placeholder='Email' type='text' className='shadow-categories py-5 focus-visible:ring-0 focus-visible:ring-offset-0' />
                            <Button className='customBtn py-5'>Subscribe</Button>
                        </div>
                        <p className='mt-3 text-xs font-bold'>Pure inspiration, zero spam ✨</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Newsletter