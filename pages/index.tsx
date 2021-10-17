import React from 'react';
import MainLayout from '../components/MainLayout';

const Home = () => (
  <MainLayout>
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
          , I enjoy spending time with my girls and playing video games, as well
          as helping others join and thrive on the software field
        </p>
      </div>
    </main>
  </MainLayout>
);

export default Home;
