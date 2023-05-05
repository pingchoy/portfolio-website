/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from 'react'
import AboutMe from '@/components/AboutMe'
import Cover from '@/components/Cover'
import Header from '@/components/Header'
import Work from '@/components/Work'

export default function Home () {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollY(window.scrollY)
    })
  }, [])

  return (
    <div className='bg-gray-900 min-h-screen scroll-smooth'>
      <div>
        <Header />
        <Cover scrollY={scrollY} />
        <AboutMe />
        <Work />
      </div>
    </div>
  )
}
