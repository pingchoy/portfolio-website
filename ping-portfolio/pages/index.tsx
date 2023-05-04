/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useOnScreen } from '@/utils/utils'

const inter = Inter({ subsets: ['latin'] })

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' }
]

export default function Home () {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollY(window.scrollY)
    })
  }, [])

  const ref1 = useRef(null)
  const ref2 = useRef(null)

  const isInViewport1 = useOnScreen(ref1)

  useEffect(() => {
    console.log('isInViewport1: ', isInViewport1)
  }, [isInViewport1])

  return (
    <div className='bg-gray-900 min-h-screen scroll-smooth'>
      <header className='absolute inset-x-0 top-0 z-50 '>
        <nav
          className='flex items-center justify-between p-6 lg:px-8'
          aria-label='Global'
        >
          <div className='flex lg:flex-1'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <img
                className='h-8 w-auto'
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
                alt=''
              />
            </a>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='hidden lg:flex lg:gap-x-12'>
            {/* Navigation if needed */}
          </div>
          <div className='hidden lg:flex lg:flex-1 lg:justify-end'></div>
        </nav>
        <Dialog
          as='div'
          className='lg:hidden'
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className='fixed inset-0 z-50' />
          <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10'>
            <div className='flex items-center justify-between'>
              <a href='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Your Company</span>
                <img
                  className='h-8 w-auto'
                  src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
                  alt=''
                />
              </a>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-400'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/25'>
                <div className='space-y-2 py-6'>
                  {navigation.map(item => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800'
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className='py-6'>
                  <a
                    href='#'
                    className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800'
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <div>
        <section className='relative h-screen w-full pointer-events-none overflow-hidden  '>
          <img
            className='absolute top-0 left-0 object-cover w-full h-full brightness-50 mix-blend-screen'
            src='/img/Asset 5.png'
            alt='Asset 5'
          />
          <img
            className='absolute top-0 object-cover w-full  brightness-75 mix-blend-screen '
            style={{
              transform: `rotate(${scrollY / 150}deg)`,
              left: `${0.2 * scrollY - 50}px`
            }}
            src='/img/Asset 6.png'
            alt='Asset 6'
          />
          <div
            className='absolute overflow-hidden z-10 left-0 right-0 '
            style={{ top: `${0.3 * scrollY + 40}px` }}
          >
            <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-48'>
              <div className='hidden sm:mb-8 sm:flex sm:justify-center'></div>
              <div className='relative text-center'>
                <h1 className='text-4xl tracking-tight text-white sm:text-8xl animate-fade-up-1.5s body-font font-[600] font-poppins font-bold text-shadow-sm shadow-indigo-900'>
                  First Last
                </h1>

                <p className="mt-6 left-52 px-4 absolute py-2 after:top-0 after:left-0 after:absolute after:w-[0%] after:h-[100%] after:bg-indigo-900 after:content-[''] after:animate-revBlockAfter">
                  <span className='opacity-0 animate-revBlock text-3xl leading-8 text-white drop-shadow-lg font-semibold text-shadow-sm shadow-indigo-900 font-poppins'>
                    Job Title Here
                  </span>
                </p>
              </div>
            </div>
          </div>
          <img
            className='absolute bottom-0 left-0 w-full h-[30rem] brightness-75 z-50'
            style={{ height: `${-0.007 * scrollY + 30}rem` }}
            src='/img/Asset 3.png'
            alt='Asset 3'
          />
          <img
            className='absolute bottom-0 right-0 w-full h-[25rem] brightness-75 z-50 '
            style={{ height: `${-0.01 * scrollY + 25}rem` }}
            src='/img/Asset 2.png'
            alt='Asset 2'
          />
          <img
            className='absolute bottom-0 left-0 w-full h-[25rem] brightness-75 z-50'
            style={{ height: `${0.02 * scrollY + 25}rem` }}
            src='/img/Asset 1.png'
            alt='Asset 1'
          />
        </section>
        <section className="h-screen before:content-[''] before:absolute before:bottom-0 before:w-full before:h-[100px] before:bg-gradient-to-t before:from-gray-900 before:to-transparent before:z-50">
          <div className='mt-6' ref={ref1}>
            <p className="mt-6 left-20 pr-10 absolute py-2 after:top-0 after:left-0 after:absolute after:w-[0%] after:h-[100%] after:bg-indigo-900 after:content-[''] after:animate-revBlockAfter">
              <span className='opacity-0 animate-revBlock text-3xl leading-8 text-white drop-shadow-lg font-semibold text-shadow-sm shadow-indigo-900 font-poppins'>
                Summary
              </span>
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
