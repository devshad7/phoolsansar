'use client'

import Navbar from '@/components/Navbar'
import SearchResult from '@/components/SearchResult'
import { useSearchParams } from 'next/navigation'
import React from 'react'

function page() {

    const searchParam = useSearchParams()
    const q = searchParam.get('q')

  return (
    <>
    <Navbar />
    <SearchResult query={q} />
    </>
  )
}

export default page