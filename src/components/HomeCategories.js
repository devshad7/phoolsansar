import { Award, ChartColumnIncreasing, File, FileQuestion, Flame, Flower, Laptop, Plane, Presentation, Wallet } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const HomeCategories = () => {
  return (
    <div className="2xl:max-w-[95rem] mx-auto md:px-28 py-10 md:py-14 text-center flex items-center flex-col">
        <span className='text-xs uppercase font-bold text-gray-500 tracking-wider'>Explore Trending Topics</span>
        <div className="max-w-[940px] mx-auto flex flex-wrap justify-center gap-4 md:gap-5 mt-8">
            <Link href={'/category/technology'} className="py-3 px-5 bg-white shadow-categories hover:shadow-custom rounded-full font-bold flex justify-center items-center gap-2">
                <Flower color='#2472e4' />
                <span>Gardening</span>
            </Link>
            <Link href={'/category/travel'} className="py-3 px-5 bg-white shadow-categories hover:shadow-custom rounded-full font-bold flex justify-center items-center gap-2">
                <ChartColumnIncreasing color='#ed7528' />
                <span>Share Market</span>
            </Link>
            <Link href={'/category/sport'} className="py-3 px-5 bg-white shadow-categories hover:shadow-custom rounded-full font-bold flex justify-center items-center gap-2">
                <Award color='#009b51' />
                <span>Sport</span>
            </Link>
            <Link href={'/category/business'} className="py-3 px-5 bg-white shadow-categories hover:shadow-custom rounded-full font-bold flex justify-center items-center gap-2">
                <Wallet color='#6044ce' />
                <span>Great Personalities</span>
            </Link>
            <Link href={'/category/management'} className="py-3 px-5 bg-white shadow-categories hover:shadow-custom rounded-full font-bold flex justify-center items-center gap-2">
                <FileQuestion color='#e22572' />
                <span>World Facts</span>
            </Link>
            <Link href={'/trending'} className="py-3 px-5 bg-white shadow-categories hover:shadow-custom rounded-full font-bold flex justify-center items-center gap-2">
                <Flame color='#e1411e' />
                <span>Trending</span>
            </Link>
            <Link href={'/category/startup'} className="py-3 px-5 bg-white shadow-categories hover:shadow-custom rounded-full font-bold flex justify-center items-center gap-2">
                <Presentation color='#595959' />
                <span>Stories</span>
            </Link>
            <Link href={'/news'} className="py-3 px-5 bg-white shadow-categories hover:shadow-custom rounded-full font-bold flex justify-center items-center gap-2">
                <File color='#17aeef' />
                <span>Celebrities</span>
            </Link>
        </div>
    </div>
  )
}

export default HomeCategories