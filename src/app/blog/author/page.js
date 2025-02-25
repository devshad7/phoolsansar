import About from '@/components/About'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import React from 'react'

export const metadata = {
  title: "About Ezaz Ahmed - Educator & Mentor",
  description: "Ezaz Ahmed is a dedicated lecturer from Nautanwa, Uttar Pradesh, inspiring students through engaging education and mentorship.",
  keywords: ["Ezaz Ahmed", "Lecturer", "Education", "Teaching", "Nautanwa", "Holy Cross School Nautanwa", "Student Mentor", "Uttar Pradesh", "India"],
  authors: [{ name: "Ezaz Ahmed" }],
  openGraph: {
    title: "About Ezaz Ahmed - Educator & Mentor",
    description: "Ezaz Ahmed is a dedicated lecturer inspiring students through engaging education and mentorship.",
    url: "https://phoolsansar.com/blog/author",
    type: "profile",
    images: [
      {
        url: "/assets/author_main.png",
        width: 1200,
        height: 630,
        alt: "Ezaz Ahmed - Educator & Mentor",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "About Ezaz Ahmed - Educator & Mentor",
    description: "Ezaz Ahmed is a dedicated lecturer inspiring students through engaging education and mentorship.",
    images: ["/assets/author_main.png"]
  },
  robots: "index, follow"
}

const page = () => {
  return (
    <>
      <Navbar />
      <About />
      <Newsletter />
      <Footer />
    </>
  )
}

export default page