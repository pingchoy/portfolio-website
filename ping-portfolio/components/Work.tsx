import { isOnScreen } from '@/utils/utils'
import { useEffect } from 'react'

export default function Work () {
  useEffect(() => {
    isOnScreen('work')
  }, [])

  return (
    <>
      <section
        id='work'
        className="h-screen before:content-[''] before:absolute before:bottom-0 before:w-full before:h-[100px] before:bg-gradient-to-t before:from-gray-900 before:to-transparent before:z-50 section-intersection"
      >
        <div className='container mx-auto max-w-5xl  mt-24'>
          {/* Title */}
          <div className='flex relative px-12 justify-left'>
            <p className=' flex pr-10 relative py-2 after:top-0 after:left-0 animate-block js-show-block-on-scroll'>
              <span className='opacity-0 text-5xl leading-8 text-white drop-shadow-lg font-semibold text-shadow-sm shadow-indigo-900 font-poppins js-show-text-on-scroll '>
                Work
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
