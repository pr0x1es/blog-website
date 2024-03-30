import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { 
    GoArrowLeft,
    GoInfo
} from "react-icons/go";

const page = () => {
  return (
    <>
    <title>Hiking exploration</title>
    <main className='
    flex
    flex-col
    items-center
    bg-zinc-900
    text-balance 
    smooth-scroll
    '>
        <div>
            <section>
                <Link
                href="/blogs"
                >
            <GoArrowLeft
            size={75} 
            className='
            -ml-[680px]
            hover:text-slate-300 
            transition 
            ease-in-out
            delay-150
            '/>
            </Link>
            </section>
        </div>

        <div>
            <section>
                <p 
                className='
                text-6xl 
                mb-8 
                font-extralight 
                font-sans
                '>
                    Hiking exploration
                </p>
            </section>
        </div>

    <Image
    alt='A landscape'
    src='/assets/blog11.jpg'
    width={550}
    height={550}
    className='
    rounded-xl
    '/>
    <div>
        <section>
            <pre className='
            text-center
            text-2xl
            my-9
            font-sans
            font-light
            '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br /> 
                Sequi qui quis provident, 
                <br />
                necessitatibus doloribus molestias,
                <br /> 
                temporibus atque molestiae deleniti distinctio 
                <br />
                perspiciatis officia sit expedita reiciendis corrupti.
                <br /> 
                Illum eum fuga laboriosam?
            </pre>
        </section>
        </div>

        <Image
    alt='A landscape'
    src='/assets/blog12.jpg'
    width={550}
    height={550}
    className='
    rounded-xl
    '/>
    <div>
        <section>
            <pre className='
            text-center
            text-2xl
            my-9
            font-sans
            font-light
            '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br /> 
                Sequi qui quis provident, 
                <br />
                necessitatibus doloribus molestias,
                <br /> 
                temporibus atque molestiae deleniti distinctio 
                <br />
                perspiciatis officia sit expedita reiciendis corrupti.
                <br /> 
                Illum eum fuga laboriosam?
            </pre>
        </section>
        </div>

        <Image
    alt='A landscape'
    src='/assets/blog13.jpg'
    width={550}
    height={550}
    className='
    rounded-xl
    '/>
    <div>
        <section>
            <pre className='
            text-center
            text-2xl
            my-9
            font-sans
            font-light
            '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br /> 
                Sequi qui quis provident, 
                <br />
                necessitatibus doloribus molestias,
                <br /> 
                temporibus atque molestiae deleniti distinctio 
                <br />
                perspiciatis officia sit expedita reiciendis corrupti.
                <br /> 
                Illum eum fuga laboriosam?
            </pre>
        </section>
        </div>

        <div>
            <section>
                <div className='
                flex
                items-center
                flex-col
                '>
            <GoInfo 
            size="70"
            className='
            my-7
            mt-[125px]
            '
            />
                <p className='
                text-center
                text-5xl
                pb-11
                '>
                    End of blog.
                </p>
                </div>
            </section>
        </div>
        </main>
        </>
  )
}

export default page;