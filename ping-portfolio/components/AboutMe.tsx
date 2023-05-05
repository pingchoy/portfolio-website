import { isOnScreen } from '@/utils/utils'
import { useEffect } from 'react'

const technologies = [
  'JavaScript (ES6+)',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'TailwindCSS'
]
export default function AboutMe () {
  useEffect(() => {
    isOnScreen('about-me')
  }, [])

  return (
    <>
      <section
        id='about-me'
        className=" before:content-[''] before:absolute before:bottom-0 before:w-full before:h-[100px] before:bg-gradient-to-t before:from-gray-900 before:to-transparent before:z-50 section-intersection"
      >
        <div className='container mx-auto max-w-5xl  mt-24'>
          {/* Title */}
          <div className='flex relative px-12 justify-left'>
            <p className=' flex pr-10 relative py-2 after:top-0 after:left-0 animate-block js-show-block-on-scroll'>
              <span className='opacity-0 text-5xl leading-8 text-white drop-shadow-lg font-semibold text-shadow-sm shadow-indigo-900 font-poppins js-show-text-on-scroll '>
                About Me
              </span>
            </p>
          </div>

          {/* Content */}
          <div className='flex relative mt-8 px-12 justify-left '>
            <p className=' pr-6 relative py-2  animate-block js-show-block-on-scroll'>
              <span className='opacity-0 text-3xl leading-8 text-white drop-shadow-lg font-[400] text-shadow-sm shadow-indigo-900 js-show-text-on-scroll'>
                I'm a Fullstack Software Engineer experienced in developing both
                internal and client facing solutions. I'm passionate about
                learning new technologies and applying them to solve real-world
                problems.
              </span>
            </p>
          </div>
          <div className='flex relative mt-8 px-12 justify-left '>
            <p className=' pr-6 relative py-2  animate-block js-show-block-on-scroll'>
              <span className='opacity-0 text-3xl leading-8 text-white drop-shadow-lg font-[400] text-shadow-sm shadow-indigo-900 js-show-text-on-scroll'>
                Here are some of the technologies I've been working with
                recently:
              </span>
            </p>
          </div>
          <div className='mt-8 px-12 justify-left '>
            <ul className='list-disc grid grid-cols-2 relative '>
              {technologies.map(tech => (
                <li key={tech} className='relative text-3xl text-white mb-2'>
                  <p className='text-3xl absolute text-white animate-block js-show-block-on-scroll pb-2 pl-2 pr-6'>
                    <span className='opacity-0 text-3xl leading-8 text-white drop-shadow-lg font-[400] text-shadow-sm shadow-indigo-900 js-show-text-on-scroll'>
                      {tech}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
