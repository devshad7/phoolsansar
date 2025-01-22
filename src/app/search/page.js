'use client'

import Navbar from '@/components/Navbar'
import SearchResult from '@/components/SearchResult'
import { useSearchParams } from 'next/navigation'
import React, { Suspense } from 'react'

function page() {

  const searchParam = useSearchParams()
  const q = searchParam.get('q')

  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading search results...</div>}>
        <SearchResult query={q} />
      </Suspense>
    </>
  )
}

export default page