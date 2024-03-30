import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import 
{ 
  GoInfo, 
  GoLinkExternal,
  GoHomeFill
} from "react-icons/go";

import { 
  FaMountainSun, 
  FaTree, 
  FaPersonHiking 
} from "react-icons/fa6";

const page = () => {
  return (
    <>
    <title>Blogs</title>
    <main 
    className='
    bg-zinc-900 
    flex 
    flex-col 
    items-center
    scroll-smooth
    '>

      <div>
        <section>
          <Link
          href="/"
          >
            <button 
            className='
            hover:text-slate-300
            transition 
            ease-in-out
            delay-150
            '>
          <GoHomeFill 
          size={75} 
          className='
          -ml-[680px]
          '/>
          </button>
          </Link>
        </section>
      </div>


      <div>
        <section>
          <p 
          className='
          text-6xl 
          mb-11
          font-sans
          font-extralight
          '>
            👋 Welcome to my blogs!
          </p>
        </section>
      </div>

        <div>
          <section>
              <p 
              className='
              text-5xl 
              font-semibold 
              text-center 
              my-6
              '>
                
                <FaMountainSun 
                size={75} 
                className='
                ml-[250px] 
                my-7
                '/>
                Mountain exploration
              </p>
              </section>

                <Image
                alt='
                A mountain
                '
                className='
                rounded-xl
                '
                src='/assets/blog1.jpg'
                width={570}
                height={570}
                quality={100}
                />

                <div>
                <Link
                href="/mountain-exploration"
                className='
                text-white 
                text-5xl  
                hover:text-slate-300
                hover:-translate-y-1
                transition ease-in-out delay-150
                font-thin
                '>
                  <section>
                  <p 
                  className='
                  text-center
                  my-6
                  bg-zinc-800
                  rounded-xl
                  '>
                    <GoLinkExternal />
                    Open blog
                  </p>
                  </section>
                </Link>

                </div>
        </div>



          <div>
            <section>
              <p 
              className='
              text-5xl 
              font-semibold 
              text-center 
              my-6
              '>
                <FaTree 
                size={75} 
                className='
                ml-[250px] 
                my-7
                '
                />
                Forest exploration.
              </p>
              </section>

                <Image
                alt='
                A mountain
                '
                className='
                rounded-xl
                '
                src='/assets/blog2.jpg'
                width={570}
                height={570}
                quality={100}
                />

                <div>
                <Link
                href="/forest-exploration"
                className='
                text-white 
                text-5xl 
                hover:text-slate-300
                hover:-translate-y-1
                transition ease-in-out delay-150
                font-thin
                '>
                  <p 
                  className='
                  text-center
                  my-6
                  bg-zinc-800
                  rounded-xl
                  '>
                    <GoLinkExternal />
                  Open blog
                  </p>
                </Link>

                </div>
        </div>

        <div>
            <section>
              <p 
              className='
              text-5xl 
              font-semibold
              text-center 
              my-6
              '>
                <FaPersonHiking 
                size={75} 
                className='
                ml-[250px] 
                my-7
                '/>
                Hiking exploration.
              </p>
              </section>

                <Image
                alt='
                A mountain
                '
                className='
                rounded-xl
                '
                src='/assets/blog4.jpg'
                width={570}
                height={570}
                quality={100}
                />

                <div>
                <Link
                href="/hiking-exploration"
                className='
                text-white 
                text-5xl 
                hover:text-slate-300
                hover:-translate-y-1
                transition ease-in-out delay-150
                font-thin
                '>
                  <p 
                  className='
                  text-center
                  my-6
                  bg-zinc-800
                  rounded-xl
                  '>
                    <GoLinkExternal />
                    Open blog
                  </p>
                </Link>

                </div>
        </div>

        <div>
          <section>
            <p 
            className='
            text-6xl 
            font-sans 
            font-thin 
            my-16
            '>
            <GoInfo 
            size={70} 
            className='
            ml-[125px] 
            mt-[125px]
            my-7
            '
            />
              End of blogs.
            </p>
          </section>
        </div>

        </main>
        </>
  )
}

export default page;