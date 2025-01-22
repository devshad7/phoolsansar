'use client'

import Navbar from '@/components/Navbar'
import SearchResult from '@/components/SearchResult'
import { useSearchParams } from 'next/navigation'
import React, { Suspense } from 'react'

function SearchContent() {
  const searchParams = useSearchParams();
  const q = searchParams.get('q');

  return (
    <>
      <Navbar />
      <SearchResult query={q} />
    </>
  );
}

export default function Page() {
  return (
    <Suspense fallback={
      <div>
        <Navbar />
        <div>
          <p>Loading...</p>
        </div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}