import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import BreadCrumb from './BreadCrumb'

const Contact = () => {
    return (
        <>
            <div className="2xl:max-w-[95rem] mx-auto px-5 md:px-28 pt-6">
                <BreadCrumb post={'Contact'} />
                <div className="flex flex-col items-center mt-8">
                    <div className="flex flex-col items-center text-center gap-2">
                        <h1 className='text-2xl md:text-3xl font-bold'>Feel Free to Contact Me</h1>
                        <p className='md:w-[420px] text-gray-500'>Feel free to contact me for any inquiries, support, or collaboration opportunities. I'm here to assist you!</p>
                    </div>
                    <div className="md:w-[640px] w-full mx-auto mt-8">
                        <div className="p-8 md:p-12 shadow-categories rounded-xl w-full">
                            <h1 className='pb-5 text-xl font-bold'>Ready to Get Started?</h1>
                            <form>
                                <div className="flex flex-col gap-5">
                                    <div className="flex md:flex-row flex-col gap-5">
                                        <div className="w-full">
                                            <Label htmlFor="name" className='text-gray-500'>Name*</Label>
                                            <Input type='text' id='name' className='focus-visible:ring-0 focus-visible:ring-offset-0' required />
                                        </div>
                                        <div className="w-full">
                                            <Label htmlFor="email" className='text-gray-500'>Email*</Label>
                                            <Input type='email' id='email' className='focus-visible:ring-0 focus-visible:ring-offset-0' required />
                                        </div>
                                    </div>
                                    <div>
                                        <Label htmlFor="message" className='text-gray-500'>Your Message*</Label>
                                        <Textarea id='message' className='focus-visible:ring-0 focus-visible:ring-offset-0' required />
                                    </div>
                                    <div className="">
                                        <Button className='customBtn'>Submit Request</Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact