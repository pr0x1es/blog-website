import Image from "next/image";
import Link from "next/link";
import React from 'react';

import { 
  GoLinkExternal,
  GoRocket,
  GoInfo
} from "react-icons/go";


export default function Home() {
  return (
    <>

    <main 
    className='
    flex 
    flex-col 
    justify-center 
    items-center
    bg-zinc-900
    p-11
    overflow-hidden
    bg-cover
    '>
    <section>
    <div>
      <p
      className='
      text-6xl
      text-center
      font-sans
      font-bold
      mb-20
      '>
      👋 Welcome to my blog website!
      </p>
    </div>
    </section>

    <section>
      <div>
        <Image
        alt="Blogs" 
        src="/homepage.jpg"
        width={750}
        height={750}
        quality={100}
        className="
        rounded-xl
        "
        />
        <Link
        href="/blogs"
        >
          <div 
          className='
          flex
          justify-center
          '>
          <button 
          className='
          text-5xl
          hover:text-slate-300
          my-6
          transition ease-in-out delay-75
          font-semibold
          '>
            <p 
            className='
            rounded-xl 
            bg-zinc-800 
            transition 
            ease-in-out 
            delay-150
            my-7
            '>
            <GoLinkExternal 
            className='
            ml-[150px]
            '/> 
            Open my blogs.
            </p>
          </button>
          </div>
        </Link>
      </div>
    </section>

    <section>
      <div>
        <Image
        alt="Blogs" 
        src="/assets/blog4.jpg"
        width={750}
        height={750}
        quality={100}
        className="
        rounded-xl
        "
        />
        <Link
        href="/hiking-exploration"
        >
          <div 
          className='
          flex
          justify-center
          '>
          <button 
          className='
          text-5xl
          hover:text-slate-300
          my-6
          transition ease-in-out delay-75
          font-semibold
          '>
            <p 
            className='
            rounded-xl 
            bg-zinc-800 
            transition 
            ease-in-out 
            delay-150
            my-7
            '>
            <GoRocket 
            className='
            ml-[180px]'
            /> 
            Most recent blog.
            </p>
          </button>
          </div>
        </Link>
      </div>
    </section>

    <div>
      <section>
        <div 
        className='
        flex
        flex-col
        items-center
        '>
        <p 
        className='
        mt-[140px]
        text-6xl
        font-light
        font-sans
        '>
          <GoInfo 
          size='70'
          className='
          ml-[185px]
          my-7
          '/>
      End of homepage
      </p>
      </div>
      </section>
    </div>

    </main>    
    </>
  );
}
