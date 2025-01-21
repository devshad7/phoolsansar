import Link from 'next/link'
import React from 'react'
import Logo from './ui/logo'

const MainLogo = () => {
    return (
        <>
            <Link href={'/'} className="flex items-center gap-2">
                <div className="h-custom w-custom hover:bg-gray-700 bg-primary-text flex items-center justify-center rounded-lg">
                    <Logo />
                </div>
                <h1 className='font-bold uppercase hover:text-gray-700 text-primary-text'>PhoolSansar</h1>
            </Link>
        </>
    )
}

export default MainLogo