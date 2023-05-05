export default function Cover ({ scrollY }: { scrollY: number }) {
  return (
    <>
      <section className='relative h-screen w-full pointer-events-none overflow-hidden  '>
        <img
          className='absolute top-0 left-0 object-cover w-full h-full brightness-50 mix-blend-screen'
          src='/img/Asset 5.png'
          alt='Asset 5'
        />
        <img
          className='absolute top-0 object-cover w-full brightness-50 mix-blend-screen animate-slow-pulse '
          style={{
            left: `${0.2 * scrollY - 100}px`
          }}
          src='/img/Asset 6.png'
          alt='Asset 6'
        />
        <div
          className='absolute overflow-hidden z-10 left-0 right-0 '
          style={{ top: `${0.3 * scrollY + 70}px` }}
        >
          <div className='mx-auto max-w-4xl py-32 sm:py-48 lg:py-48'>
            <div className='hidden sm:mb-8 sm:flex sm:justify-center'></div>
            <div className='relative text-center'>
              <h1
                className='relative text-4xl tracking-tight text-white sm:text-6xl animate-fade-up-long font-[600] font-poppins text-shadow-sm shadow-indigo-900'
                style={{ animationDelay: '1s' }}
              >
                Hi! I'm Ping.
              </h1>
              <div className='relative flex justify-center'>
                <p className="mt-6 px-4 absolute py-4 after:top-0 after:left-0 after:absolute after:w-[0%] after:h-[100%] after:bg-indigo-900 after:content-[''] after:animate-oneTimerevBlockAfter">
                  <span className='opacity-0 animate-oneTimerevBlock text-6xl text-white font-[600] text-shadow-sm shadow-indigo-900 font-poppins'>
                    I like to code things.
                  </span>
                </p>
              </div>
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
    </>
  )
}
