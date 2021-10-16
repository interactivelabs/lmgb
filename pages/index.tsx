import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-noisy-v2 flex flex-col items-center justify-center min-h-screen border-16 border-white border-solid">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex items-center justify-around w-full h-24 border-t">
        <Image
          src="/bg/noisyV2.png"
          alt="Picture of the author"
          height={20}
          width={20}
        />
        <nav>
          <a href="/about">About</a>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="md:w-1/2 lg:w-1/3">
          <p className="mt-3 text-2xl">
            Hi, <b>Luis</b> here
          </p>
          <p className="mt-3 text-2xl">
            I&apos;m a Software Engineer currently working at{' '}
            <a
              href="https://www.linkedin.com/in/luismgonzalezb/"
              target="_blank"
              rel="noreferrer"
            >
              Airbnb
            </a>
            , I enjoy spending time with my girls and playing video games, as
            well as helping others join and thrive on the software field
          </p>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24">
        <a className="flex items-center justify-center" href="/about">
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}
