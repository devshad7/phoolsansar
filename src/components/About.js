import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <>
            <div className="2xl:max-w-[95rem] mx-auto px-5 md:px-28 pt-2 md:pt-6">
                <div className="flex flex-col items-center mt-8">
                    <div className="flex flex-col items-center text-center gap-2">
                        <h1 className='text-2xl md:text-3xl font-bold'>About Author</h1>
                        <p className='md:w-[420px] text-gray-500'>A detailed information about the author</p>
                    </div>
                    <div className="mt-8 text-center">
                        <Image
                            src='/assets/author_banner.png'
                            height={900}
                            width={900}
                            alt={'author_banner'}
                            className='rounded-xl w-full max-w-[400px] md:max-w-full h-auto'
                        />
                    </div>
                    <div className="prose md:prose-lg xl:prose-lg 2xl:prose-base mx-auto mt-8 max-w-[95%] md:w-[70%]">
                        <p className='text-lg'><strong className='text-2xl italic text-violet-600'>Ezaz Ahmed </strong>
                            is a dedicated lecturer from <strong>Nautanwa</strong> <strong>, Uttar Pradesh</strong> who inspires growth through education. His commitment to nurturing young minds and fostering
                            a love for learning makes him an inspiring figure in the academic community. With a strong background in teaching methodologies,
                            he aims to make learning engaging, effective, and impactful.
                        </p>
                        <p className='text-lg'><strong>Ezaz Ahmed</strong> has been shaping young minds for over a decade. His teaching philosophy revolves around:</p>
                        <ul className='text-lg'>
                            <li><strong>Student-centered learning</strong> – Encouraging critical thinking and active participation.</li>
                            <li><strong>Real-world applications</strong> – Making subjects relevant to everyday life.</li>
                            <li><strong>Mentorship & guidance</strong> – Supporting students beyond academics.</li>
                        </ul>
                        <p className='text-2xl font-bold'>Personal Details</p>
                        <ul className='text-lg'>
                            <li><strong>Full Name</strong> – Ezaz Ahmed</li>
                            <li><strong>Date of Birth</strong> – November 25, 1981</li>
                            <li><strong>Marital Status</strong> – Married</li>
                            <li><strong>Nationality</strong> – Indian</li>
                            <li><strong>Religion</strong> – Muslim</li>
                            <li><strong>Mother Tongue</strong> – Hindi</li>
                            <li><strong>Email</strong> – ezaz.raza@gmail.com</li>
                            <li><strong>Address</strong> – Private</li>
                        </ul>
                        <div className="">
                            <p className='text-2xl font-bold'>Educational Qualifications</p>
                            <div className="overflow-x-auto md:px-4">
                                <table className='table-auto text-base'>
                                    <thead>
                                        <tr>
                                            <th>Qualification</th>
                                            <th>Year</th>
                                            <th>University/Board</th>
                                            <th>Medium</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>High School</td>
                                            <td>1998</td>
                                            <td>I.C.S.E</td>
                                            <td>English</td>
                                        </tr>
                                        <tr>
                                            <td>Intermediate</td>
                                            <td>2009</td>
                                            <td>UP Board</td>
                                            <td>Hindi</td>
                                        </tr>
                                        <tr>
                                            <td>B.COM</td>
                                            <td>2012</td>
                                            <td>DDU University</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>B.ED</td>
                                            <td>2015</td>
                                            <td>Siddhartha University</td>
                                            <td>-</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <p className='text-2xl font-bold'>Educational Qualifications</p>
                        <ul className='text-lg'>
                            <li>Classroom Management</li>
                            <li>Student Engagement Strategies</li>
                            <li>Curriculum Development</li>
                            <li>Child Psychology & Development</li>
                            <li>Effective Communication</li>
                            <li>Multilingual Instruction (English & Hindi)</li>
                        </ul>
                        <p className='text-2xl font-bold'>Teaching Philosophy</p>
                        <p className='text-lg'><strong>Ezaz Ahmed</strong> believes in an interactive and engaging approach to teaching, where students are encouraged to think critically and apply their knowledge to real-world situations. He focuses on practical learning rather than rote memorization, ensuring students grasp concepts deeply and effectively.</p>
                        <blockquote className="border-l-4 border-gray-300 pl-4 italic text-lg">
                            "Education is not just about knowledge transfer; it is about inspiring curiosity and lifelong learning."
                        </blockquote>
                        <hr />
                    </div>
                </div>
            </div >
        </>
    )
}

export default About