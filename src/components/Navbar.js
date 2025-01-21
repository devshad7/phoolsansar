'use client'

import React from 'react'
import MainLogo from './Logo'
import Link from 'next/link'
import { Button } from './ui/button'
import Search from './Search'
import { Menu } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { usePathname, useRouter } from 'next/navigation'

const Navbar = () => {

    const pathname = usePathname()
    const router = useRouter()

    return (
        <>
            <div className="2xl:max-w-[95rem] mx-auto px-5 md:px-28 py-5 border-b border-gray-100">
                <div className="flex items-center justify-between">
                    <MainLogo />
                    <div className="hidden md:flex items-center gap-4">
                        <Link href={'/'} className={pathname === '/' ? 'bg-gray-100 py-1 px-3 rounded-md' : 'hover:bg-gray-100 py-1 px-3 rounded-md'}>
                            Home
                        </Link>
                        <Link href={'/trending'} className={pathname === '/trending' ? 'bg-gray-100 py-1 px-3 rounded-md' : 'hover:bg-gray-100 py-1 px-3 rounded-md'}>
                            Trending
                        </Link>
                        <Link href={'/stories'} className={pathname === '/stories' ? 'bg-gray-100 py-1 px-3 rounded-md' : 'hover:bg-gray-100 py-1 px-3 rounded-md'}>
                            Stories
                        </Link>
                        <Link href={'/news'} className={pathname === '/news' ? 'bg-gray-100 py-1 px-3 rounded-md' : 'hover:bg-gray-100 py-1 px-3 rounded-md'}>
                            News
                        </Link>
                    </div>
                    <div className="flex items-center gap-6 md:gap-10">
                        <Search />
                        <Button className='customBtn px-5 rounded-lg font-semibold md:block hidden'>
                            Contact
                        </Button>
                        <div className="md:hidden flex justify-center items-center">
                            <DropdownMenu>
                                <DropdownMenuTrigger className='focus:outline-none'><Menu /></DropdownMenuTrigger>
                                <DropdownMenuContent className='mr-3'>
                                    <DropdownMenuLabel>Navbar</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => router.push('/')}>Home</DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => router.push('/trending')}>Trending</DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => router.push('/stories')}>Stories</DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => router.push('/news')}>news</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar

