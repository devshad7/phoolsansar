import { Award, ChartColumnIncreasing, File, Flame, Laptop, Plane, Presentation, Wallet } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const HomeCategories = () => {
  return (
    <div className="2xl:max-w-[95rem] mx-auto md:px-28 py-10 md:py-14 text-center flex items-center flex-col">
        <span className='text-xs uppercase font-bold text-gray-500 tracking-wider'>Explore Trending Topics</span>
        <div className="max-w-[940px] mx-auto flex flex-wrap justify-center gap-4 md:gap-5 mt-8">
            <Link href={''} className="py-3 px-5 bg-white shadow-categories hover:shadow-custom rounded-full font-bold flex justify-center items-center gap-2">
                <Laptop color='#2472e4' />
                <span>Technology</span>
            </Link>
            <Link href={''} className="py-3 px-5 bg-white shadow-categories hover:shadow-custom rounded-full font-bold flex justify-center items-center gap-2">
                <Plane color='#ed7528' />
                <span>Travel</span>
            </Link>
            <Link href={''} className="py-3 px-5 bg-white shadow-categories hover:shadow-custom rounded-full font-bold flex justify-center items-center gap-2">
                <Award color='#009b51' />
                <span>Sport</span>
            </Link>
            <Link href={''} className="py-3 px-5 bg-white shadow-categories hover:shadow-custom rounded-full font-bold flex justify-center items-center gap-2">
                <Wallet color='#6044ce' />
                <span>Business</span>
            </Link>
            <Link href={''} className="py-3 px-5 bg-white shadow-categories hover:shadow-custom rounded-full font-bold flex justify-center items-center gap-2">
                <ChartColumnIncreasing color='#e22572' />
                <span>Management</span>
            </Link>
            <Link href={''} className="py-3 px-5 bg-white shadow-categories hover:shadow-custom rounded-full font-bold flex justify-center items-center gap-2">
                <Flame color='#e1411e' />
                <span>Trends</span>
            </Link>
            <Link href={''} className="py-3 px-5 bg-white shadow-categories hover:shadow-custom rounded-full font-bold flex justify-center items-center gap-2">
                <Presentation color='#595959' />
                <span>Startups</span>
            </Link>
            <Link href={''} className="py-3 px-5 bg-white shadow-categories hover:shadow-custom rounded-full font-bold flex justify-center items-center gap-2">
                <File color='#17aeef' />
                <span>News</span>
            </Link>
        </div>
    </div>
  )
}

export default HomeCategories